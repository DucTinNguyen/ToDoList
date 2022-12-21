import React, { useEffect, useState } from 'react';
import './ToDoList.css'
import { Switch } from 'antd';
import { BsLightbulbFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineArrowLeft, AiFillCloseCircle } from 'react-icons/ai'
import avatar from '../assets/avatar.jpg'
import { Container } from '../Components/Container';
import { H2, H4 } from '../Components/Heading';
import { Button, ButtonDone } from '../Components/Button';
import { Item } from '../Components/Item';
import { ThemeProvider } from 'styled-components';
import { DarkMode } from '../Themes/DarkMode';
import { Header } from '../Components/Header';
import { LightMode } from '../Themes/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme,addTask } from '../features/todolist/todolistSlice';
import Modal from 'react-modal';
import { Input } from 'antd';
import Draggable from 'react-draggable';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
function ToDoList() {

    const {theme,listToDo,listDone} = useSelector(state => state.todolist)
    const dispatch = useDispatch();
    const [isModal, setModal] = useState(false);
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    const onChange = (checked) => {
        if (checked) {
            dispatch(
                changeTheme(DarkMode),
            )
        }
        else {
            dispatch(
                changeTheme(LightMode),
            )
        }
    }
    // State task
    const [task,setTask] = useState('');
    const renderTaskTodo = () => {
        return listToDo.map((task,index) => {
            return <Draggable bounds={{top: 0, left: 0, right: 0, bottom: 100}} {...dragHandlers} key={index}><Item title='You can drag down to completed' className="box">{task}</Item></Draggable> 
        })
    }
    const onChangeValue = e => {
       let {value} = e.target;
        setTask(value);
    }
    const handleAddTask = () => {
        dispatch(addTask(task));
    }
    // Dragable
    const [drag,setDrag] = useState({
        activeDrags:0,
        deltaPosition: {
            x: 0, y: 0
          },
          controlledPosition: {
            x: -400, y: 200
          }
    })
    const onStart = () => {
        setDrag({
          activeDrags: ++drag.activeDrags
        })
    }
    const onStop = () => {
        setDrag({
            activeDrags: --drag.activeDrags
        })
    }
    const dragHandlers = {onStart: onStart, onStop:onStop};
    const {deltaPosition, controlledPosition} = drag;

    return (
        <div className="todolist">
            <ThemeProvider theme={theme}>
                <Container>
                    {/*  */}
                    <Header className="header">
                        <AiOutlineArrowLeft style={{ cursor: 'pointer' }} />
                        <div className="right">
                            <BsLightbulbFill style={theme === LightMode ? { color: '#000' } : { color: '#bfbfbf' }} />
                            <Switch onChange={onChange} style={{ color: "#bfbfbf" }} />
                            <MdDarkMode style={theme === DarkMode ? { color: '#000' } : { color: '#fff' }} />
                        </div>
                    </Header>
                    {/*  */}
                    <div className="information">
                        <div className="avatar">
                            <img src={avatar} alt="avatar" />
                        </div>
                        <H2>Laura</H2>
                    </div>
                    {/*  */}
                    <div className="seperate">
                        <Button>
                            <span>{listToDo.length}</span> created task
                        </Button>
                    </div>
                    {/* task todo */}
                    <section className='Tasks'>
                        <H4>Task to do</H4>
                        <ul className="list">
                            { renderTaskTodo()}
                            <Item onClick={() => { openModal() }}><AiOutlinePlus /></Item>
                        </ul>
                    </section>
                    {/* task done */}
                    <section className='Tasks'>
                        <H4>Task completed</H4>
                    </section>
                </Container>
            </ThemeProvider>
            {/* modal */}
            <Modal
                isOpen={isModal}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-heading">
                    <h2>ToDo Task</h2>
                    <AiFillCloseCircle onClick={()=>{closeModal()}} style={{cursor:'pointer'}} />
                </div>
                <Input.Group>
                    <Input
                        style={{
                            width: '100%',
                        }}
                        onChange={onChangeValue}
                    />
                    <button onClick={()=>{handleAddTask()}} className='submit'>Submit</button>
                </Input.Group>
            </Modal>
        </div>
    )
}

export default ToDoList
