import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Card = styled.div`
display: flex;
flex-direction: column;
width: clamp(20rem, calc(20rem + 2vw), 22rem);
overflow: hidden;
box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
border-radius: 1em;
background: #ece9e6;
background: linear-gradient(to right, #ffffff, #ece9e6);
`

export const CardSelected = styled.div`
display: flex;
flex-direction: column;
width: clamp(20rem, calc(20rem + 2vw), 22rem);
overflow: hidden;
box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
border-radius: 1em;
background: #ece9e6;
background: linear-gradient(to right, #ffffff, #ece9e6);

border-color: gold;
border-style: dotted;


`

export const CardBody = styled.div`
padding: 1rem;
display: flex;
text-align:center;
flex-direction: column;

h4 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
export const CardFooter = styled.div`
display: flex;
padding: 1rem;
margin-top: auto;
justify-content: right;
`
