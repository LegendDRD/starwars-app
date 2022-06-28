import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const NavBarStyle = styled.div`

background-color: black;
height: 10vh;
display: flex;
justify-content: space-between;
text-align: center;
padding: .5rem;
z-index: 10;

`;

export const NavLinkStyle = styled(NavLink)`

color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

`;


export const NavMenu = styled.div`

display: flex;
align-items: center;

@media screen and (max-width:768px) {
    display: none;
}

`;

export const NavLinkBtnStyle = styled(HashLink)`

color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

`;