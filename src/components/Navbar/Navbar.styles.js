import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {BiRestaurant} from 'react-icons/bi';
import {Container} from '../../GlobalStyles';


export const Nav = styled.nav` 
    font-size: 18px;
    position: sticky;
    top: 0;
    z-index: 999;
    height: 80px;
    // background-color: rgba(0, 0, 0, 0.5);
    // box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    // box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    ${Container};
`;

export const NavLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 800;
    transition: all .5s ease;
`;

export const MenuIcon = styled.div`
    display: none;
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
`;

export const MenuItem = styled.li`
    list-style: none;
    height: 80px;
`;

export const MenuLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    height: 100%;
    transition: all .2s ease;

    &:hover {
        color: #E38B06;
        transform: traslateY(-3rem);
        
    }
    &:active {
        transform: traslateY(3rem);
        color: #E38B06;
    }
`;

export const MenuItemBtn = styled.li`
    list-style: none;
`;

export const MenuLinkBtn = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;

`;