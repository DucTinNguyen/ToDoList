import styled from 'styled-components';

export const Item = styled.li`
background:${props => props.theme.bgItem};
padding: 15px 13px;
border-radius: 5px;
margin-right: 4px;
cursor: pointer;
font-weight:bold;
color: ${props => props.theme.color}

`