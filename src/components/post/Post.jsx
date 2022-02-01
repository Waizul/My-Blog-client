import React from 'react';
import { Link } from 'react-router-dom';
import { PostCategories, PostCategory, PostContainer, PostDate, PostDesc, PostImg, PostInfo, PostTitle } from './postStyles';

const Post = ({post}) => {
  return <PostContainer>
      {
          post.photo &&  <PostImg src={post.photo} alt='blog photo' />
      }
     
      <PostInfo>
          <PostCategories>
              {
                  post.categories.map(c=><PostCategory>{c.name}</PostCategory>)
              }
            
          </PostCategories>
          <Link to={`/posts/${post._id}`}>
<PostTitle>{post.title}</PostTitle>
          </Link>
          
          <PostDate>{post.date}</PostDate>
          <PostDesc>{post.desc}</PostDesc>
      </PostInfo>
  </PostContainer>
};

export default Post;
