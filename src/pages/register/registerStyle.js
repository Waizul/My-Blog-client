import styled from "styled-components";

export const Container = styled.div`
height: calc(100vh - 50px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background:linear-gradient(rgb(255,255,255,0.5),rgb(255,255,255,0.5)),url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
background-size: cover;
position: relative;

`
export const Title = styled.span`
font-size: 50px;
`
export const Form = styled.form`
margin-top: 20px;
display: flex;
flex-direction: column;
&>label{
    margin:10px 0;
    margin-bottom: 5px;
}
&>input{
    padding:10px;
    border: none;
    border-radius: 10px;
    outline-style: none;
}
`
export const Button = styled.button`
 /* margin-top: 20px; */
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
 
.login&{
    position: absolute;
    top: 10px;
    right: 30px;
    background-color: lightcoral;

}

`
