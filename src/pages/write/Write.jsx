import React, { useState } from 'react';
import { AddIcon, Input, Label, PublishButton, TextArea, WriteContainer, WriteForm, WriteFormGroup } from './writeStyle';
import {Icon} from '../../globalStyles'
import useAuth from '../../hooks/useAuth'
import axios from 'axios';
const Write = () => {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [photo,setPhoto] = useState(null)
    
    const {user} = useAuth()

const handleSubmit = async(e) =>{
e.preventDefault()
const newPost = {
    displayName: user.displayName,
    email:user.email,
    title,
    photo,
    desc
}
console.log(newPost);
try {
    await axios.post('http://localhost:1000/posts',newPost)
} catch (err) {
    
}
}
  return <WriteContainer>
      {
          photo && <img src={photo} alt='blog photo' />
      }
      <img src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" />

      <WriteForm onSubmit={handleSubmit}>
          <WriteFormGroup>

     
          <Label htmlFor='file-input'>
              <AddIcon><i className="fas fa-plus"></i></AddIcon>
              Add your file or write below:
          </Label>
          <Input type='file' id='file-input'/>
         
          <br/>
          <Input placeholder='Type' autoFocus={true}/>
          <Input placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
           <Input placeholder='Add photo link' onChange={e=>setPhoto(e.target.value)} />
               </WriteFormGroup>
               <WriteFormGroup>
                   <TextArea placeholder='Tell your story...' 
                   onChange={e=>setDesc(e.target.value)}/>
               </WriteFormGroup>
               <PublishButton>Publish</PublishButton>
      </WriteForm>
     
  </WriteContainer>
};

export default Write;
