import { IconContext } from "react-icons";
import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { Button } from '../../GlobalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn
} from './Navbar.styles';


function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
      <div>
          <IconContext.Provider value={{ color: '#fff'}}>
          <Nav>
              <NavbarContainer>
                  <NavLogo>
                      Manamed
                  </NavLogo>

                  {/* <MenuIcon onClick={handleClick}> {click ? <BiX /> : <BiMenu /> }</MenuIcon>

                  <Menu>
                      <MenuItem>
                        <MenuLink> Home </MenuLink>
                      </MenuItem>
                      <MenuItem>
                        <MenuLink> About </MenuLink>
                      </MenuItem>
                      <MenuItem>
                        <MenuLink> Recipes </MenuLink>
                      </MenuItem>
                      <MenuItemBtn>
                        <Button primary> Order Now </Button>
                      </MenuItemBtn>
                  </Menu> */}
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>
      </div>
    );
  }
  
  export default Navbar;