import styled from "styled-components";
import { IMG } from "../../globalStyles";

export const HeaderContainer = styled.div`
margin-top: 50px;
`
export const HeaderTitles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color:#444

`;
export const HeaderTtle=styled.span`
position: absolute;
top: 10%;
font-size: 25px;
.large& {
    top: 17.5%;
    font-size: 100px;
}
`
export const HeaderImg= styled(IMG)`
width: 100%;
height: 450px;
margin-top: 80px;
`