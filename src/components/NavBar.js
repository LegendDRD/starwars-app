import React from 'react'
import { NavLink } from 'react-router-dom';
import '../theme/core.css'
import { HashLink as Link } from 'react-router-hash-link';
//import { AiOutlineAlignRight } from "react-icons/ai";
export default function NavBar() {


    return (

        <div className="nav-dark">
            <NavLink className="navlink" to="/"> <h1 >SWAPI Assignment</h1></NavLink>
            {/* <div className="bars" /> */}

            <div className="navmenu">
                <Link to="/#Characters" className="navlink">
                    Characters
                </Link>

            </div>

        </div>
    )
}
