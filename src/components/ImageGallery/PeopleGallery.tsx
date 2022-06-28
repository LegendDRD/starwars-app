import { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import PeopleCard from './PeopleCard'
import PeopleCardSkeleton from './PeopleCardSkeleton'
import { CharacterTitle } from '../../theme/PeopleGalleryStyle'
import { Container } from '../../theme/GlobalStyle'
import { NavBtnStyle, NavBtnLinkRed } from '../../theme/NavStyle'
import { useQuery, gql } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/counter'

export default function PeopleGallery() {
    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const count = useSelector((state: any) => state.counter.value)

    const dispatch = useDispatch()

    const Get_people = gql`
    query ListPeople($page: Int) {
        listPeople(page: $page) {
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
    const { loading, error, data, refetch } = useQuery<any>(Get_people, { variables: { page: count } });

    useEffect(() => {
        // if (error) { console.log(error) };

        (loading && typeof data === 'undefined') ? setIsLoading(loading) : setPeople(data.listPeople); setIsLoading(loading);

        // (data.listPeople <1) ? setPeople(data.listPeople): console.log();

        if (error) console.log(`Error! ${error.message}`);

    }, [Get_people, error, loading, data]);

    useEffect(() => {
        refetch({ page: count })
    }, [count])
    return (
        <>
            <CharacterTitle id="Characters" >Star Wars Characters</CharacterTitle>
            <ul>
                {(isLoading && !data) ? <Container ><PeopleCardSkeleton /></Container> :
                    <Container>
                        {people.map((item: any, index: any) => {

                            return <PeopleCard info={item} key={index} />
                        })}

                    </Container>}
            </ul>
            <Container>
                <NavBtnStyle>
                    {(count > 1) ? <NavBtnLinkRed onClick={() => { setIsLoading(true); dispatch(decrement()); }}>Back</NavBtnLinkRed> : <></>}
                    <h3> {count} </h3>
                    <NavBtnLinkRed onClick={() => { setIsLoading(true); dispatch(increment()); }}>Next</NavBtnLinkRed>
                </NavBtnStyle>
            </Container>
        </>
    );
}
