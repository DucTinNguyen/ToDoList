import styled from 'styled-components'

export const H2 = styled.h2`
    font-size:1.6rem;
    color:${props => props.theme.color};
    margin:0;
`
export const H4 = styled(H2)`
    font-size:1rem;
    margin-bottom:0.5rem
`