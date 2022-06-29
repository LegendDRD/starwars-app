import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Container = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100vw;
margin-block: 2rem;
gap: 2rem;
padding: 10px 100px 60px;
background-color: white;

@media screen and (max-width:768px) {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100vw;
    margin-block: 2rem;
    gap: 2rem;
    padding: 0px 30px 10px 0px;
    background-color: white;
    }
`;

export const SearchContainer = styled.div`

display: grid;
max-width: 100vw;
gap:.5rem;


@media screen and (max-width:768px) {

    display: grid;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100vw;
    margin-block: 2rem;
    gap:.5rem;
    padding: 0px 30px 10px 0px;
    background-color: white;
    }
`;

export const ContainerSearch = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100vw;
margin-block: 2rem;
gap: 2rem;
padding: 10px 100px 60px;
border-bottom-style: solid ;
border-bottom-width: 2px;
@media screen and (max-width:768px) {

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100vw;
    margin-block: 2rem;
    gap: 2rem;
    padding: 0px 30px 10px 0px;
    background-color: white;

border-bottom-style: solid white ;

    }
`;

export const SearchBG = styled.div`

background-color: white;


`;

export const UlStyle = styled.ul`
padding-left: 0px;

`