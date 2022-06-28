import { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import ImageCard from './PeopleCard'
import ImageCardSkeleton from './PeopleCardSkeleton'
import '../../theme/imageCard.css'
import '../../theme/core.css'
import {
    useQuery,
    gql
} from "@apollo/client";
import ReactLoading from 'react-loading';


export default function PeopleGallery() {
    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const Get_people = gql`
    query Query($page: Int) {
        listPeople(page: $page) {
          name
          height
          mass
          gender
        }
      }
  
  `;
    const { loading, error, data } = useQuery<any>(Get_people);

    useEffect(() => {
        (loading) ? setIsLoading(loading) : setPeople(data.listPeople); setIsLoading(loading)

        if (error) console.log(`Error! ${error.message}`);

    }, [Get_people, error, data])

    return (
        <>
            <h2 id="Characters" className='profile-about'>Star Wars Characters</h2>
            <ul>
                {(isLoading) ? <div className="container"><ImageCardSkeleton /> </div> : <div className="container">
                    {people.map((item: any, index: any) => {
                        return <ImageCard info={item} key={index} />
                    })}
                </div>}

            </ul>
        </>
    );
}
