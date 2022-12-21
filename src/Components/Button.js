import styled from 'styled-components';

export const Button = styled.button`
    width:100%;
    height:100%;
    background-color:${props => props.theme.bgColor};
    color:${props => props.theme.color};
    border-color: transparent ${props =>props.theme.borderColor} transparent transparent;
    border-width: 1px;
    cursor: pointer;
`
export const ButtonDone = styled(Button)`
    border-color: transparent transparent transparent transparent;
`