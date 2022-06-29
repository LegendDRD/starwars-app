import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import backgrounder from '../static/Images/blackholeV1.png'
export const ChContainer = styled.div`
background-image: url(${backgrounder});
--card-height: 60vh;
--card-width: calc(var(--card-height) / 1.4);

`
export const BodyContainer = styled.div`
display: flex;
height: 100vh;
align-items: center;
justify-content: center;
overflow: hidden;

}
`

export const ChCard = styled.div`
height: var(--card-height);
width: var(--card-width);

background: linear-gradient(130deg, #f77474, #f7dada, #a1cde3, #7accf5);
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
position: relative;
font-weight: 600;

`
export const ChText = styled.div`
position: relative;

color: black;
`
export const ChName = styled.h1`
position: relative;
color: black;
top:-100px;

@media screen and (max-width:768px) {
    top:-100px;
    font-size: 2.5rem;
 
  }

`

export const ChTxtContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: left;
gap: 2rem;
flex-direction: column;


`