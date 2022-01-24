import styled from "styled-components";
import { UL,LI, IMG } from "../../globalStyles";
import { Link } from "react-router-dom";
export const Top = styled.div`
height: 50px;
width: 100%;
display: flex;
align-items: center;
position: sticky;
top: 0;
`

export const TopLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-left: 20px; */
`;


export const TopCenter = styled.div`
  flex: 6;
`
export const TopRight = styled.div`
flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
`
export const Icon = styled.div`
font-size: 25px;
 margin-right: 10px;
 cursor: pointer;
 &:hover{
     color:gray
 }
`
export const NavUL = styled(UL)`
display: flex;
justify-content: space-around;
font-size: 1.3rem;
font-weight: 300;
`

export const NavLI = styled (LI) `
margin-right:10px ;
cursor: pointer;
&:hover{
    color:gray
}
&>Link{
  text-decoration:none;
}
`

export const TopImg = styled(IMG)`
width: 40px;
height: 40px;
border-radius:50%;
object-fit: cover;
background-color: blue;
margin-right:10px;
cursor: pointer;
`