import { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import ImageCard from './PeopleCard'
import ImageCardSkeleton from './PeopleCardSkeleton'
import '../../theme/imageCard.css'
import '../../theme/core.css'
import { CharacterTitle } from '../../theme/PeopleGalleryStyle'
import { Container } from '../../theme/GlobalStyle'
import { NavBtnStyle, NavBtnLinkRed } from '../../theme/NavStyle'
import {
    useQuery,
    gql
} from "@apollo/client";


export default function PeopleGallery() {
    const [people, setPeople] = useState([])
    const [pageIndex, setPageIndex] = useState(1)
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
    const { loading, error, data, refetch } = useQuery<any>(Get_people, { variables: { page: pageIndex } });

    useEffect(() => {
        (loading && typeof data === 'undefined') ? setIsLoading(loading) : setPeople(data.listPeople); setIsLoading(loading)
        console.log(loading, error, data);
        if (error) console.log(`Error! ${error.message}`);

    }, [Get_people, error, loading, data]);


    return (
        <>
            <CharacterTitle id="Characters" >Star Wars Characters</CharacterTitle>

            <ul>
                {(isLoading && !data) ? <Container ><ImageCardSkeleton /> </Container> : <Container>
                    {people.map((item: any, index: any) => {
                        return <ImageCard info={item} key={index} />
                    })}
                </Container>}

            </ul>
            <Container>
                <NavBtnStyle>
                    <NavBtnLinkRed onClick={() => { let temp = pageIndex; temp++; setPageIndex(temp); setIsLoading(true); refetch({ page: pageIndex }); console.log(pageIndex) }}>Next</NavBtnLinkRed>
                </NavBtnStyle>
            </Container>
        </>
    );
}
