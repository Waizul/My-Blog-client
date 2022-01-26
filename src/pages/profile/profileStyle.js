import styled from "styled-components";

export const ProfileContainer = styled.div`
display: flex;
`

export const ProfileWrapper = styled.div`
flex: 9;
padding:20px;
margin-left: 30%;
`
export const ProfileTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const TitleUpdate = styled.span`
font-size: 30px;
margin-bottom: 20px;
color: lightcoral;
&+&{
    color: red;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
`
export const ProfileForm = styled.form`
display: flex;
flex-direction: column;

/* margin-left: 100px; */

&>label{
    font-size: 20px;
    margin-top: 20px;
}
`
export const PPContainer = styled.div`
display: flex;
align-items: center;
margin: 10px 0;
&>img{
    width: 70px;
    height: 70px;
    border-radius:20px;
    object-fit: cover;
    margin-right: 20px;
}
`
export const Input = styled.input`
width: 30%;
color: gray;
height: 30px;
margin:10px 0;
border: none;
border-bottom: 1px solid lightgray;
outline-style: none;

#file-input&{
    display:none;
}
`
export const PSubmitButton = styled.button`
/* align-self: center; */
  width: 150px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: teal;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  &:hover{
      background-color: rgb(1,114,114);
  }
`
