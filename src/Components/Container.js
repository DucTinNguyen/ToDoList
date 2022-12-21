import styled from 'styled-components'

export const Container = styled.div`
    width:400px;
    padding:1rem 0 3rem 0;
    ${'' /* thay doi theo props */}
    background-color: ${props => props.theme.bgColor}; 
    border: 1px solid ${props=> props.theme.borderColor}
`