import { useState } from 'react';
import { Title, Background } from '../theme/HomeStyle'
// import { Link, useHistory } from 'react-router-dom';
import PeopleGallery from '../components/ImageGallery/PeopleGallery'
import NavBar from '../components/NavBar'

export default function Home(props: any) {

    return (
        <>
            <NavBar />
            <Background />
            <Title>SovTech Assignment</Title>
            <PeopleGallery />
        </>
    );
}
