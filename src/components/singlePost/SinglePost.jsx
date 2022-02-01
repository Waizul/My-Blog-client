import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon, StyledLink } from '../../globalStyles';
import { AuthorName, EditIcon, PostEdit, SinglePostContainer, SinglePostDesc, SinglePostInfo, SinglePostTitle, SinglePostWrapper } from './singlePostStyle';
import useAuth from '../../hooks/useAuth'
import { async } from '@firebase/util';
import axios from 'axios';
const SinglePost = () => {
    const {id} = useParams()
    console.log(id);
    const {user} = useAuth()

const [post,setPost] = useState({})
const [title,setTitle] = useState('')
const [desc,setDesc] = useState('')
const [photo,setPhoto] = useState('')
const [updateMode,setUpdateMode] = useState(false)

useEffect(()=>{
    const getPost = async()=>{
    const res = await axios.get(`http://localhost:1000/posts/${id}`)
    setPost(res.data)
   
    }
    getPost()
},[id])
 console.log(post);
  return <SinglePostContainer>
      <SinglePostWrapper>
         {
             post.photo && <img src={post.photo} alt='photo' /> 
         }

          <SinglePostTitle>{post.title}
              <PostEdit>
                  <EditIcon><i className="far fa-edit"></i></EditIcon>
                  <EditIcon className='trash'><i className="far fa-trash-alt"></i></EditIcon>
              </PostEdit>
          </SinglePostTitle>
          <SinglePostInfo>
              <StyledLink to = {`/?user=${post.displayName}`}>
 <AuthorName>
                  Author:  <b>{post.displayName}</b> 
              
              
             </AuthorName></StyledLink>
              <span>{ new Date(post.createdAt).toLocaleDateString()}</span>
          </SinglePostInfo>
          <SinglePostDesc>
              {post.desc}
            
          </SinglePostDesc>

      </SinglePostWrapper>
  </SinglePostContainer>
};

export default SinglePost;
