import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import { Link, useHistory } from 'react-router-dom';
import '../theme/test.css'
import { current, clear } from '../features/counter/currentCharacterCache'
import { useSelector, useDispatch } from 'react-redux'
import { HashLink } from 'react-router-hash-link';

export default function Characters(props: any) {
    const currentCharacter = useSelector((state: any) => state.currentCharacter.value);
    console.log(currentCharacter)

    const { id } = useParams();

    return (
        <>
            <div className='container'>
                <div className='tbody'>
                    <div className="card">
                        <div className="text-wrapper">
                            <h1>{currentCharacter.name}</h1>
                            <span>{currentCharacter.gender}</span>
                            <span>{currentCharacter.height}</span>
                            <span>{currentCharacter.mass}</span>
                            <span>{currentCharacter.homeworld.name}</span>
                            <NavLink to={`/${id}`}>back</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
