import styled from "styled-components";
import { Button, Container } from "../register/registerStyle";

export const LoginContainer = styled(Container)`
 background:linear-gradient(rgb(255,255,255,0.5),rgb(255,255,255,0.5)),url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
 background-size: cover;
`
export const LoginButton= styled(Button)`
background-color:lightcoral ;
&:hover{
  background-color: #fb8080;
}
.signin&{
  background-color: teal;
}
.signin&{
  width: 40%;
  &:hover{
    background-color: #0080a0;
  }
}
.register&{
  width: 20%;
      position: absolute;
    top: 10px;
    right: 30px;
    background-color: teal;
     &:hover{
    background-color: #0080a0;
  }
}
`