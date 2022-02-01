import React from 'react';
import { Link } from 'react-router-dom';
import { IconContainer, StyledLink } from '../../globalStyles';
import { Icon, NavLI, NavUL, Top, TopCenter, TopImg, TopImgContainer, TopLeft, TopRight } from './topbarStyles';
import useAuth from '../../hooks/useAuth'
const Topbar = () => {
    const {user,logout} = useAuth()
  return <Top>
      <TopLeft>
       <Icon>  <i className="fab fa-facebook"></i></Icon> 
       <Icon>
      <i className="fab fa-twitter"></i>

       </Icon>
       <Icon>
      <i className="fab fa-pinterest"></i>

       </Icon>
      </TopLeft>
      <TopCenter>
          <NavUL>

              <NavLI><StyledLink to='/'>Home</StyledLink></NavLI>
              <NavLI><StyledLink to='/write'>Write</StyledLink></NavLI>
              <NavLI><StyledLink to='/explore'>Explore</StyledLink></NavLI>
              <NavLI><StyledLink to='/contact'>Contact</StyledLink></NavLI>
             {user?.email && <NavLI onClick={logout}>Logout</NavLI>  }
          </NavUL>
          </TopCenter>
      <TopRight>
          {user?.email ? <StyledLink to='/profile'> <TopImgContainer>
               <TopImg src={user?.photoURL} alt=''/>
               <p>{user?.displayName}</p>
               </TopImgContainer>
          </StyledLink>:<>
          <StyledLink to='/login'>Login</StyledLink>
             <StyledLink to='/register'>Register</StyledLink>
              </>}
         
          <Icon >

          <i className="fas fa-search"></i>
          </Icon>

      </TopRight>
  </Top>;
};

export default Topbar;
