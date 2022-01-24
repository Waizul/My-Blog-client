import React from 'react';
import Post from '../post/Post';
import { PostsContainer } from './postsStyles';

const Posts = () => {
  return <PostsContainer>
      <Post img='https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
      <Post img='https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
      <Post img='https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
      <Post img='https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
      <Post img='https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'/>
  </PostsContainer>;
};

export default Posts;
