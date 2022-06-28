import React from 'react'
import { NavBarStyle, NavLinkStyle, NavMenu, NavLinkBtnStyle } from '../theme/NavStyle'
import { NavLink } from 'react-router-dom';
import '../theme/core.css'
import { HashLink as Link } from 'react-router-hash-link';

export default function NavBar() {


    return (

        <NavBarStyle >
            <NavLinkStyle to="/"> SWAPI Assignment</NavLinkStyle>

            <NavMenu >
                <NavLinkBtnStyle to="/#Characters" className="navlink">
                    Characters
                </NavLinkBtnStyle>

            </NavMenu>

        </NavBarStyle >
    )
}
