import { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import PeopleGallery from '../components/ImageGallery/PeopleGallery'
import NavBar from '../components/NavBar'
import '../theme/core.css'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Home(props: any) {

    return (
        <><NavBar />
            <h1 className="background-image-50">
                <div className="profile">
                    <Title className="title-name border">SovTech Assignment</Title><br /><br />
                    {/* <img className="profile-image" src={profileImage} alt="Damian" /> */}
                </div>
            </h1>
            {/* 
            <div className="gap-100" />
            <h1 className="profile-about">About Me</h1>
            <p className="about-view-text">I am a passionate and self-motivated game developer with experience in C#, C++, JavaScript, Unity, Unreal, OOP and Blender. All my projects use GitHub as version control and to collaborate with other developers. I am great at communicating, solo tasks and working in a team.
                I am currently working as a back-end developer at Restrive/Beone, where I use JavaScript and TypeScript to create all the API’s which connect to custom built mySQL database servers.
            </p>
            <div className="gap-50" /> */}

            <PeopleGallery />

        </>
    );
}
