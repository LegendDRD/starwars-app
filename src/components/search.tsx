import { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { useQuery, gql } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux'
import { CharacterTitle } from '../theme/PeopleGalleryStyle'
import ImageCard from './ImageGallery/PeopleCard'
import ImageCardSkeleton from './ImageGallery/PeopleCardSkeleton'
import { Container } from '../theme/GlobalStyle'
import ReactLoading from 'react-loading';

export default function Search() {
    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [textValue, setTextValue] = useState("Luke")

    const Search_People = gql`
    query ListPeople($name: String!) {
        SearchPeople(name: $name) {
          name
          height
          mass
          birth_year
          gender
          homeworld {
            name
          }
        }
      }
      
  
  `;
    const { loading, error, data, refetch } = useQuery<any>(Search_People, { variables: { name: textValue } });

    useEffect(() => {

        (loading && typeof data === 'undefined') ? setIsLoading(loading) : setPeople(data.SearchPeople); setIsLoading(loading);
        if (error) console.log(`Error! ${error.message}`);

    }, [Search_People, error, loading, data]);

    useEffect(() => {
        refetch({ name: textValue })
    }, [textValue])

    return (
        <>
            <CharacterTitle id="Search" >Search For Star Wars</CharacterTitle>
            <input onChange={(event) => { setTextValue(event.target.value) }} placeholder="Luke"></input >

            <ul>
                {(isLoading && !data) ? <Container ><ReactLoading type='bubbles' color='black' height={25} width={50} /></Container> :
                    <Container>
                        {people.map((item: any, index: any) => {
                            return <ImageCard info={item} key={index} />
                        })}

                    </Container>}
            </ul>
        </>
    );
}
