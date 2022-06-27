import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link, useHistory } from 'react-router-dom';
import ImageCard from './PeopleCard'
import '../../theme/imageCard.css'
import '../../theme/core.css'



export default function PeopleGallery() {
    // console.log(process.env.REACT_APP_API_URL)
    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_API_URL}projects`)
    //         .then(res => {
    //             const result = res.data;
    //             setItems(result);
    //             console.log(res.data)
    //         })
    // }, []);

    let tempData = {
        "data": {
            "listPeople": [
                {
                    "name": "Luke Skywalker",
                    "height": 172,
                    "mass": "77",
                    "gender": "male",
                    "homeworld_id": "1",
                    "homeworld": {
                        "name": "Tatooine"
                    }
                },
                {
                    "name": "C-3PO",
                    "height": 167,
                    "mass": "75",
                    "gender": "n/a",
                    "homeworld_id": "1",
                    "homeworld": {
                        "name": "Tatooine"
                    }
                },
                {
                    "name": "R2-D2",
                    "height": 96,
                    "mass": "32",
                    "gender": "n/a",
                    "homeworld_id": "8",
                    "homeworld": {
                        "name": "Naboo"
                    }
                },
                {
                    "name": "Darth Vader",
                    "height": 202,
                    "mass": "136",
                    "gender": "male",
                    "homeworld_id": "1",
                    "homeworld": {
                        "name": "Tatooine"
                    }
                },
                {
                    "name": "Leia Organa",
                    "height": 150,
                    "mass": "49",
                    "gender": "female",
                    "homeworld_id": "2",
                    "homeworld": {
                        "name": "Alderaan"
                    }
                },
                {
                    "name": "Owen Lars",
                    "height": 178,
                    "mass": "120",
                    "gender": "male",
                    "homeworld_id": "1",
                    "homeworld": {
                        "name": "Tatooine"
                    }
                },
                {
                    "name": "Beru Whitesun lars",
                    "height": 165,
                    "mass": "75",
                    "gender": "female",
                    "homeworld_id": "1",
                    "homeworld": {
                        "name": "Tatooine"
                    }
                },
                {
                    "name": "R5-D4",
                    "height": 97,
                    "mass": "32",
                    "gender": "n/a",
                    "homeworld_id": "1",
                    "homeworld": {
                        "name": "Tatooine"
                    }
                },
                {
                    "name": "Biggs Darklighter",
                    "height": 183,
                    "mass": "84",
                    "gender": "male",
                    "homeworld_id": "1",
                    "homeworld": {
                        "name": "Tatooine"
                    }
                },
                {
                    "name": "Obi-Wan Kenobi",
                    "height": 182,
                    "mass": "77",
                    "gender": "male",
                    "homeworld_id": "20",
                    "homeworld": {
                        "name": "Stewjon"
                    }
                }
            ]
        }
    }

    return (
        <>
            <h2 id="Gallery" className='profile-about'>Star Wars Characters</h2>
            <ul>
                <div className="container">
                    {tempData.data.listPeople.map((item: any, index: any) => {
                        return <ImageCard info={item} key={index} />
                    })}
                </div>
            </ul>
        </>
    );
}
