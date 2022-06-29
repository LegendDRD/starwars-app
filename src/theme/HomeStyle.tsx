import styled from 'styled-components'
import backgrounder from '../static/Images/image1.png'

export const Title = styled.h1`
    opacity: 80%;
    font-size: 32px;
    letter-spacing: 10px;
    position: absolute;
    top: 20%;
    left:38%;
    text-align: center;
    background-color: #111;
    color: #fff;
    padding: 10px;
    opacity: 80%;
    font-size: 25px;
    letter-spacing: 10px;

    @media screen and (max-width:768px) {

        opacity: 80%;
        font-size: 32px;
        position: absolute;
        left: 0;
        top: 30%;
        text-align: center;
        background-color: #111;
        color: #fff;
        padding: 0px;
        opacity: 80%;
        font-size: 25px;
        letter-spacing: 10px;
      
        }
`;

export const Background = styled.div`
background-image: url(${backgrounder});
position: relative;
height: 30vh;
background-position: center;
background-repeat: no-repeat;
background-size: cover;


`;

