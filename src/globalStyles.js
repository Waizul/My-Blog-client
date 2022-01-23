import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const Container = styled.div`
padding: 1rem 2rem;
`
export const UL = styled.ul`
margin: 0;
padding:0;
list-style: none;

`;


export const LI = styled.li`

`;

export const IMG = styled.img`
object-fit: cover;
`
export const IconContainer = styled.div`

`
export const Icon = styled.span`
font-size: ${props=>props.size||'1rem'};
margin-left: 10px;
`