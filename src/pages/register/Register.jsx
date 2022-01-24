import React from 'react';
import { StyledLink } from '../../globalStyles';
import { Button, Container, Form, Title } from './registerStyle';

const Register = () => {
  return <Container>
      <Title>Register</Title>
      <Form>
          <label>Username</label>
          <input placeholder='Enter your username...' />
          <label>Email</label>
          <input placeholder='Enter your email...' />
          <label>Password</label>
          <input placeholder='Enter your password...' />
          <label> Confirm Password </label>
          <input placeholder='Enter your password again...' />
          <Button>Register</Button>
      </Form>
    <StyledLink to='/login'> <Button className='login'>Login</Button></StyledLink> 
  </Container>
};

export default Register;
