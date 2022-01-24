import React from 'react';
import { StyledLink } from '../../globalStyles';
import { Button, Container, Form, Title } from '../register/registerStyle';
import { LoginButton, LoginContainer } from './loginStyle';

const Login = () => {
  return <LoginContainer>
      <Title>Login</Title>
      <Form>
            <label>Email</label>
          <input placeholder='Enter your email...' />
          <label>Password</label>
          <input placeholder='Enter your password...' />
          <LoginButton>Login</LoginButton>
      </Form>
     <StyledLink to='/register'><LoginButton className='register'>Register</LoginButton></StyledLink> 
  </LoginContainer>
};

export default Login;
