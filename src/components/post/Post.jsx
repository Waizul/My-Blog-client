import React from 'react';
import { PostCategories, PostCategory, PostContainer, PostDate, PostDesc, PostImg, PostInfo, PostTitle } from './postStyles';

const Post = ({img}) => {
  return <PostContainer>
      <PostImg src={img} alt='blog' />
      <PostInfo>
          <PostCategories>
              <PostCategory>
                  Music
              </PostCategory>
              <PostCategory>
Life
              </PostCategory>
          </PostCategories>
          <PostTitle>Post about anything</PostTitle>
          <PostDate>5 hour ago</PostDate>
          <PostDesc>Welcome everyone. Today I will write something about life and music.In this blog, I will try div dive into mind, to see its impact on music. How music changes our life we may not realise how deep it does.It can imoroves life quality, increase brain activity, frshens our mind.</PostDesc>
      </PostInfo>
  </PostContainer>
};

export default Post;
