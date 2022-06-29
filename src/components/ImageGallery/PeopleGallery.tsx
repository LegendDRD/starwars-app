import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PeopleCard from './PeopleCard'
import PeopleCardSkeleton from './PeopleCardSkeleton'
import { CharacterTitle } from '../../theme/PeopleGalleryStyle'
import { Container } from '../../theme/GlobalStyle'
import { NavBtnStyle, NavBtnLinkRed } from '../../theme/NavStyle'
import { useQuery, gql } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, clear } from '../../features/counter/counter'
import { store, clearCache } from '../../features/counter/searchCache'

export default function PeopleGallery() {
    const [people, setPeople] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [hasScrolled, sethasScrolled] = useState(false)
    const { id } = useParams();
    const count = useSelector((state: any) => state.counter.value)
    const searchCache = useSelector((state: any) => state.search.value)

    console.log(searchCache)
    const [textValue, setTextValue] = useState(searchCache);

    const dispatch = useDispatch()

    const Get_people = gql`
    query Query($name: String, $page: Int) {
        listPeople(name: $name, page: $page) {
          name
          height
          mass
          gender
          homeworld {
            name
          }
        }
      }
      
  `;
    const { loading, error, data, refetch } = useQuery<any>(Get_people, { variables: { page: count, name: textValue } });

    useEffect(() => {
        // if (error) { console.log(error) };

        (loading && typeof data === 'undefined') ? setIsLoading(loading) : setPeople(data.listPeople); setIsLoading(loading);

        // (data.listPeople <1) ? setPeople(data.listPeople): console.log();

        if (error) console.log(`Error! ${error.message}`);

    }, [Get_people, error, loading, data]);

    useEffect(() => {
        refetch({ page: count })
    }, [count, refetch])

    useEffect(() => {
        if (typeof id === 'string' && !loading && !hasScrolled) {
            scrollTo(id)
        }
    }, [id, loading, hasScrolled])

    function scrollTo(id: string) {
        const characterElement = document.getElementById(id);

        if (!characterElement) return;
        sethasScrolled(true)

        characterElement.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <>
            <CharacterTitle id="Characters" >Star Wars Characters</CharacterTitle>
            <input onChange={(event) => { dispatch(clear()); dispatch(store(event.target.value)); setTextValue(event.target.value) }} placeholder="Darth Vader"></input >
            <button onClick={() => { dispatch(clearCache()); setTextValue("") }}>Clear</button >
            <ul>
                {(isLoading && !data) ? <Container ><PeopleCardSkeleton /></Container> :
                    <Container>
                        {people.map((item: any, index: any) => {
                            let selected = false;
                            if (id && id === index + "-" + item.name) { selected = true } else { selected = false; }
                            return <PeopleCard info={item} key={index} id={index + "-" + item.name} selected={selected} />
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
