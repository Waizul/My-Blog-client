import { Link } from "react-router-dom";
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
margin-top: 15px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
`
export const Icon = styled.span`
font-size: ${props=>props.size||'1rem'};
margin-left: 10px;
cursor: pointer;
`
export const StyledLink=styled(Link)`
color: inherit;
text-decoration: none;
`