import { NavLink, useParams } from 'react-router-dom';
import '../theme/test.css'
import { useSelector, useDispatch } from 'react-redux'
import { ChContainer, BodyContainer, ChCard, ChText, ChName, ChTxtContainer } from '../theme/CharacterStyle'



export default function Characters(props: any) {
    const currentCharacter = useSelector((state: any) => state.currentCharacter.value);
    console.log(currentCharacter)

    const { id } = useParams();

    return (
        <>
            <ChContainer>
                <BodyContainer >
                    <ChCard >
                        <ChText >
                            <ChName>{currentCharacter.name}</ChName>
                            <ChTxtContainer>
                                <span>Gender: {currentCharacter.gender}</span>
                                <span>Height: {currentCharacter.height}</span>
                                <span>Mass: {currentCharacter.mass}</span>
                                <span>Homeworld: {currentCharacter.homeworld.name}</span>
                            </ChTxtContainer>
                            <NavLink to={`/${id}`}>back</NavLink>
                        </ChText>
                    </ChCard>
                </BodyContainer>
            </ChContainer>
        </>
    );
}
