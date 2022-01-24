import React from 'react';
import SinglePost from '../../components/singlePost/SinglePost';
import Sidebar from '../../components/sidebar/Sidebar'

const SinglePostPage = () => {
  return <div style={{display:'flex'}}><SinglePost/>
  <Sidebar/>
  </div>;
};

export default SinglePostPage;
