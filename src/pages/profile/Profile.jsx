import React from 'react';
import { Input, PPContainer, ProfileContainer, ProfileForm, ProfileTitle, ProfileWrapper, PSubmitButton, TitleUpdate } from './profileStyle';
import {Icon} from '../../globalStyles'
import Sidebar from '../../components/sidebar/Sidebar'
import {AddIcon} from '../write/writeStyle'
const Profile = () => {
  return <ProfileContainer>
      <ProfileWrapper>
          <ProfileTitle>
              <TitleUpdate>Update Your Account</TitleUpdate>
              <TitleUpdate>Delete Account</TitleUpdate>
          </ProfileTitle>
          <ProfileForm>
              <label>Profile Picture</label>
              <PPContainer>
                  <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="" />
                  <label htmlFor='file-input'>
                  <AddIcon><i className='far fa-user-circle'></i></AddIcon>
                  </label>
                  <Input id='file-input' type='file' />
              </PPContainer>
              <label>
Username
              </label>
          <Input placeholder='waizul' name='name' />
          <label>Email</label>
          <Input placeholder='waizul@gmail.com' name='email' type='email'/>
          <label>Password</label>
          <Input placeholder='password' name='password' type='password' />
          <PSubmitButton type='submit'>Update</PSubmitButton>
          </ProfileForm>
      </ProfileWrapper>
      <Sidebar/>
  </ProfileContainer>
};

export default Profile;
