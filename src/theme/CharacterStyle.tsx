import styled from 'styled-components'
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
box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, .7);
background: linear-gradient(130deg, #f77474, #f7dada, #a1cde3, #7accf5);
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
position: relative;
font-weight: 600;
align-items: flex-start;
`
export const ChText = styled.div`
position: relative;
width: var(--card-width);
height: var(--card-height);
color: black;
padding:20px;
`
export const ChName = styled.h1`
position: relative;
color: black;


@media screen and (max-width:768px) {

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

export const BtnLinkBack = styled(HashLink)`
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

export const BtnStyle = styled.div`
display: flex;
align-items: center;
margin-right: 23px;
border-radius: 10%;


`