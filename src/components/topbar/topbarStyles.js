import styled from "styled-components";
import { UL,LI, IMG } from "../../globalStyles";
export const Top = styled.div`
height: 50px;
width: 100%;
display: flex;
align-items: center;
position: sticky;
top: 0;
border: 1px solid blue;
border-color: 1px solid blue

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
export const TopRight = styled(TopLeft)`
  
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
justify-content: space-between;
margin-right: 20px;
font-size: 1.3rem;
`

export const NavLI = styled (LI) `
cursor: pointer;
&:hover{
    color:gray
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