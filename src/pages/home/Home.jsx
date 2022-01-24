import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components//header/Header';
import Posts from '../../components/posts/Posts';
import { Wrapper } from './homeStyles';

function Home() {
  return <>
      <Header/>
      <Wrapper>

      <Posts/>
      <Sidebar/>
      </Wrapper>
  </>;
}

export default Home;
