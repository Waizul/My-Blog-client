import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, IconContainer } from '../../globalStyles';
import { SidebarContainer, SidebarItem, SidebarLI, SidebarTitle, SidebarUL } from './sidebarStyles';

const Sidebar = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        const getCategory = async()=>{
            const res = await axios.get('http://localhost:1000/categories')
setCategories(res.data)
        }
        getCategory()
    },[])

  return <SidebarContainer>
      <SidebarItem>
          <SidebarTitle>About Me</SidebarTitle>
          <img src='https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
<p>Welcome to my blog. I publish contents on various subjects</p>
      </SidebarItem>
      <SidebarItem>
          <SidebarTitle>Categories</SidebarTitle>
          <SidebarUL>
              {
                  categories?.map(c=><Link to={`/?cat=${c.name}`}><SidebarLI>{c.name}</SidebarLI></Link>)
              }
            
          </SidebarUL>
      </SidebarItem>
      <SidebarItem>
          <SidebarTitle>Follow Us</SidebarTitle>
          <IconContainer>
              <Icon>  <i className="fab fa-facebook"></i></Icon> 
       <Icon>
      <i className="fab fa-twitter"></i>

       </Icon>
       <Icon>
      <i className="fab fa-pinterest"></i>

       </Icon>
          </IconContainer>
      </SidebarItem>
  </SidebarContainer>
};

export default Sidebar;
