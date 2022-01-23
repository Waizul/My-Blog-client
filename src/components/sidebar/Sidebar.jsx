import React from 'react';
import { Icon, IconContainer } from '../../globalStyles';
import { SidebarContainer, SidebarItem, SidebarLI, SidebarTitle, SidebarUL } from './sidebarStyles';

const Sidebar = () => {
  return <SidebarContainer>
      <SidebarItem>
          <SidebarTitle>About Me</SidebarTitle>
          <img src='https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
<p>Welcome to my blog. I publish contents on various subjects</p>
      </SidebarItem>
      <SidebarItem>
          <SidebarTitle>Categories</SidebarTitle>
          <SidebarUL>
              <SidebarLI>Life</SidebarLI>
              <SidebarLI>Music</SidebarLI>
              <SidebarLI>Style</SidebarLI>
              <SidebarLI>Tech</SidebarLI>
              <SidebarLI>Cinema</SidebarLI>
          </SidebarUL>
      </SidebarItem>
      <SidebarItem>
          <SidebarTitle>Follow Us</SidebarTitle>
          <IconContainer>
              <Icon>  <i class="fab fa-facebook"></i></Icon> 
       <Icon>
      <i class="fab fa-twitter"></i>

       </Icon>
       <Icon>
      <i class="fab fa-pinterest"></i>

       </Icon>
          </IconContainer>
      </SidebarItem>
  </SidebarContainer>
};

export default Sidebar;
