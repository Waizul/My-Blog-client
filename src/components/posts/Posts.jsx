import React from 'react';
import Post from '../post/Post';
import { PostsContainer } from './postsStyles';

const Posts = ({posts}) => {
  return <PostsContainer>
    {
posts?.map(post=><Post post={post}/>)
    }
      
  </PostsContainer>;
};

export default Posts;
