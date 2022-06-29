import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const CharacterTitle = styled.h2`

font-weight: bold;
color: rgb(19, 18, 18);
text-align: center;
opacity: 80%;
font-size: 36px;
letter-spacing: 10px;

`;

export const InputStyle = styled.input`

font-size: 1.5rem;
margin: 0 auto;
padding: .5rem 0rem;
border-radius: 2rem;
text-align:center;
border: soild;
width: 20%;
transition: all 0.3s;
border-color:lightgrey;

&:focus{
  border-color:blue;
font-size: 3rem;
margin: 0 auto;
padding: .5rem 0rem;
border-radius: 2rem;
text-align:center;
border: soild;
width: 25%;
transition: all 0.3s;


  }

  @media screen and (max-width:768px) {
    font-size: 1.5rem;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    border-radius: 2rem;
    text-align:center;
    border: soild;
    width: 40%;
    transition: all 0.3s;
    
    &:focus{
    font-size: 1.5rem;
    margin: 0 auto;
    padding: 1rem 1rem;
    border-radius: 2rem;
    text-align:center;
    border: soild;
    width: 45%;
    transition: all 0.3s;
    
      }
  
    }

`;

export const ButtonStyle = styled.button`

font-size: 1.5rem;
margin: 0 auto;
padding: .5rem 0rem;
border-radius: 2rem;
text-align:center;
border: soild;
width: 10%;
transition: all 0.3s;
background-color:white;
border-color:lightgrey;
cursor:pointer;

  @media screen and (max-width:768px) {
    font-size: 1.5rem;
    margin: 0 auto;
    padding: .5rem 0rem;
    border-radius: 2rem;
    text-align:center;
    border: soild;
    width: 40%;
    transition: all 0.3s;
    border-color:lightgrey;
    }

`;

export const NextPage = styled.h3`

padding: 10px
`;