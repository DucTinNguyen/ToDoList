import { createSlice } from '@reduxjs/toolkit'
import { LightMode } from '../../Themes/LightMode'

const initialState = {
    theme: LightMode,
    listToDo:[],
    listDone:[],
}

export const todolistSlice = createSlice({ 
    name: 'todolist',
    initialState,
    reducers:{
        changeTheme: (state,action) =>{
            state.theme = action.payload
        },
        addTask: (state,action) =>{
            let listUpdate = [...state.listToDo];
            listUpdate.push(action.payload)
            state.listToDo = listUpdate
        }
    },
})
// Action creators are generated for each case reducer function
export const { changeTheme,addTask } = todolistSlice.actions
export default todolistSlice.reducer;