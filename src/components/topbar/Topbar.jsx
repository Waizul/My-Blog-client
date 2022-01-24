import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLink } from '../../globalStyles';
import { Icon, NavLI, NavUL, Top, TopCenter, TopImg, TopLeft, TopRight } from './topbarStyles';
import {LoginButton} from '../../pages/login/loginStyle'
import { Button } from '../../pages/register/registerStyle';
const Topbar = () => {
    const user = false
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

              <NavLI><StyledLink to='/'>Home</StyledLink></NavLI>
              <NavLI><StyledLink to='/write'>Write</StyledLink></NavLI>
              <NavLI><StyledLink to='/explore'>Explore</StyledLink></NavLI>
              <NavLI><StyledLink to='/contact'>Contact</StyledLink></NavLI>
             {user && <NavLI>Logout</NavLI>  }
          </NavUL>
          </TopCenter>
      <TopRight>
          {user ? <Link to='/profile'>
               <TopImg src='https://images.pexels.com/photos/6992/forest-trees-northwestisbest-exploress.jpg?auto=compress&cs=tinysrgb&h=650&w=940' alt=''/>
          </Link>:<>
              <LoginButton><StyledLink to='/login'>Login</StyledLink></LoginButton>
              <Button><StyledLink to='/register'>Register</StyledLink></Button>
              </>}
         
          <Icon>

          <i class="fas fa-search"></i>
          </Icon>

      </TopRight>
  </Top>;
};

export default Topbar;
