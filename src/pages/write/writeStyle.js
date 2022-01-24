import styled from "styled-components";

export const WriteContainer = styled.div`
padding: 50px 0;

&>img{
    margin-left: 150px;
    width: 70vw;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
}
`

export const WriteForm = styled.form`
position: relative;
width: 70vw;
`
export const WriteFormGroup = styled.div`
margin-left: 150px;
margin-top: 50px;
`

export const AddIcon = styled.span`
width: 25px;
height: 25px;
font-size: 20px;
border: 1px solid;
border-radius: 50%;
color: rgb(129,125,125);
cursor: pointer;
display: flex;
  align-items: center;
  justify-content: center;

`
export const Label = styled.label`
display: flex;
align-items: center;
width: 330px;
gap:10px;
font-size: 25px;
color: rgb(129,125,125);
`

export const Input = styled.input`
font-size: 25px;
border: none;
padding:10px ;
width: 70vw;
&:focus{
    outline-style: none;
}
&::placeholder{
    color: rgb(189,185,185);
}
#file-input&{
    display: none;
}

`
export const TextArea = styled.textarea`
width: 70vw;
height: 100vh;
font-size: 20px;
border: none;
border-bottom: 2px solid gray;
&:focus{
    outline-style: none;
}
&::placeholder{
    color: rgb(189,185,185);
}

`
export const PublishButton = styled.button`
position: absolute;
top: 0;
right: 80px;
color: white;
background-color: teal;
padding: 10px;
border-radius: 10px;
cursor: pointer;
`