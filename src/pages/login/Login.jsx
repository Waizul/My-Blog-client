import React from 'react';
import { StyledLink } from '../../globalStyles';
import { Button, Container, Form, Title } from '../register/registerStyle';
import { LoginButton, LoginContainer } from './loginStyle';
import useAuth from '../../hooks/useAuth'
import useFirebase from '../../hooks/useFirebase';
import { Link } from 'react-router-dom';

const Login = () => {
  const userCredentials = useAuth()
  const {login,logout} = userCredentials
 console.log(useAuth());

  return <LoginContainer>
      <Title>Login</Title>
      <Form>
            <label>Email</label>
          <input placeholder='Enter your email...' />
          <label>Password</label>
          <input placeholder='Enter your password...' />
          <LoginButton >Login</LoginButton>
      </Form>
          <LoginButton onClick={login} className='signin'>Login With Google</LoginButton>
     <Link to='/register'><LoginButton className='register'>Register</LoginButton></Link> 
  </LoginContainer>
};

export default Login;
