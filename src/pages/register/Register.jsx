import React from 'react';
import { Link } from 'react-router-dom';
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
      <Button className='signup'>Sign up with Google</Button>
    <Link to='/login'> <Button className='login'>Login</Button></Link> 
  </Container>
};

export default Register;
