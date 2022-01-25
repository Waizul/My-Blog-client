import React from 'react';
import { AddIcon, Input, Label, PublishButton, TextArea, WriteContainer, WriteForm, WriteFormGroup } from './writeStyle';
import {Icon} from '../../globalStyles'
const Write = () => {
  return <WriteContainer>
      <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />
      <WriteForm>
          <WriteFormGroup>

     
          <Label htmlFor='file-input'>
              <AddIcon><i className="fas fa-plus"></i></AddIcon>
              Add your file or write below:
          </Label>
          <Input type='file' id='file-input'/>
          <br/>
          <Input placeholder='Type' autoFocus={true}/>
          <Input placeholder='Title' />
               </WriteFormGroup>
               <WriteFormGroup>
                   <TextArea placeholder='Tell your story...' />
               </WriteFormGroup>
               <PublishButton>Publish</PublishButton>
      </WriteForm>
     
  </WriteContainer>
};

export default Write;
