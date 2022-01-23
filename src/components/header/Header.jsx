import { HeaderContainer, HeaderImg, HeaderTitles, HeaderTtle } from "./headerStyle";


const Header = () => {
  return <HeaderContainer>
  
  <HeaderTitles>
      <HeaderTtle>My Stories</HeaderTtle>
      <HeaderTtle className="large">BLOG</HeaderTtle>
  </HeaderTitles>
  <HeaderImg src="https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
  </HeaderContainer>;
};
export default Header;
