import React from 'react'
import { NavBarStyle, NavLinkStyle, NavMenu, NavLinkBtnStyle } from '../theme/NavStyle'


export default function NavBar() {


    return (

        <NavBarStyle >
            <NavLinkStyle to="/"> SWAPI Assignment</NavLinkStyle>

            <NavMenu >
                <NavLinkBtnStyle to="/#Characters">
                    Characters
                </NavLinkBtnStyle>

            </NavMenu>

        </NavBarStyle >
    )
}
