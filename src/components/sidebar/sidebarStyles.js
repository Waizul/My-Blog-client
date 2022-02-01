import styled from "styled-components";
import { LI, UL } from "../../globalStyles";

export const SidebarContainer = styled.div `
flex:2;
height:fit-content;
margin: 20px;
padding-bottom: 30px;
background-color: #fdfbfb;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
`
export const SidebarItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;

&>img{
    margin-top:15px;
  max-width: 250px;
    height: 200px;
}
&>p{
    padding:30px
}
`

export const SidebarTitle= styled.span`
margin: 10px;
padding: 5px;
width: 80%;
text-align: center;
border-top: solid 1px #a7a4a4;
border-bottom: solid 1px #a7a4a4;
font-size: 12px;
line-height: 19px;
font-weight: 600;
color:#222222

`
export const SidebarUL = styled(UL)`
margin-bottom: 30px;
`
export const SidebarLI = styled(LI)`
display: inline-block;
width:50%;
margin-top:15px;
cursor: pointer;
`