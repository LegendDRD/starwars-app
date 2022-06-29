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
&:hover {
    font-size: larger;
    color: #2aa6f7
  }


`;


export const NavMenu = styled.div`

display: flex;
align-items: center;

@media screen and (max-width:768px) {
  display: flex;
align-items: center;
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
&:hover {
    font-size: larger;
    color: #2aa6f7
  }


`;

export const NavBtnStyle = styled.div`
display: flex;
align-items: center;
margin-right: 23px;
border-radius: 10%;

`

export const NavBtnLinkRed = styled.div`
border-radius: 50px;
border: 1px solid #1d1d1d !important;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 25px;
padding-left: 25px;
color: rgb(7, 7, 7);
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {

  transition: all 0.2s ease-in-out;
  color: #f72a2a;
  border: 1px solid #f72a2a !important;

}

`

export const NavBtnLinkGreyed = styled.div`
border-radius: 50px;
border: 1px solid lightgrey !important;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 25px;
padding-left: 25px;
color: rgb(7, 7, 7);
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {

  transition: all 0.2s ease-in-out;
  color:  #94949470;
  border: 1px solid white !important;

}

`
export const NavBtnLinkViewMore = styled(HashLink)`
border-radius: 50px;
border: 1px solid #1d1d1d !important;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 25px;
padding-left: 25px;
color: rgb(7, 7, 7);
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {

  transition: all 0.2s ease-in-out;
  color: #31f72a;
  border: 1px solid #31f72a !important;

}



`
