import React from 'react';
import { Icon, NavLI, NavUL, Top, TopCenter, TopImg, TopLeft, TopRight } from './topbarStyles';

const Topbar = () => {
  return <Top>
      <TopLeft>
       <Icon>  <i class="fab fa-facebook"></i></Icon> 
       <Icon>
      <i class="fab fa-twitter"></i>

       </Icon>
       <Icon>
      <i class="fab fa-pinterest"></i>

       </Icon>
      </TopLeft>
      <TopCenter>
          <NavUL>
              <NavLI>Home</NavLI>
              <NavLI>About</NavLI>
              <NavLI>Contact</NavLI>
              <NavLI>Logout</NavLI>
          </NavUL>
          </TopCenter>
      <TopRight>
          <TopImg/>
          <Icon>

          <i class="fas fa-search"></i>
          </Icon>

      </TopRight>
  </Top>;
};

export default Topbar;
