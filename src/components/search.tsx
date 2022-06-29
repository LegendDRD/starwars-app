import { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import { CharacterTitle } from '../theme/PeopleGalleryStyle'
import ImageCard from './ImageGallery/PeopleCard'
import { ContainerSearch, SearchBG, UlStyle } from '../theme/GlobalStyle'
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

            <SearchBG>

                <CharacterTitle id="Search" >Search For Star Wars</CharacterTitle>
                <input onChange={(event) => { setTextValue(event.target.value) }} placeholder="Luke"></input >

                <UlStyle>
                    {(isLoading && !data) ? <ContainerSearch ><ReactLoading type='bubbles' color='black' height={25} width={50} /></ContainerSearch> :
                        <ContainerSearch>
                            {people.map((item: any, index: any) => {
                                return <ImageCard info={item} key={index} id={index + "-" + item.name + "-searched"} />
                            })}

                        </ContainerSearch>}
                </UlStyle>
            </SearchBG>

        </>
    );
}
