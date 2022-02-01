import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components//header/Header';
import Posts from '../../components/posts/Posts';
import { Wrapper } from './homeStyles';

function Home() {
  const [posts,setPosts] = useState([])
 console.log(posts);
  useEffect(()=>{
    const getPosts = async()=>{
      const res = await axios.get('http://localhost:1000/posts')
      setPosts(res.data)
      console.log(posts);
    }
    getPosts()
  },[])
  
  return <>
      <Header/>
      <Wrapper>

      <Posts posts={posts}/>
      <Sidebar/>
      </Wrapper>
  </>;
}

export default Home;
