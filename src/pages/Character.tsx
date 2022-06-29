import { NavLink, useParams } from 'react-router-dom';
import '../theme/test.css'
import { useSelector, useDispatch } from 'react-redux'
import { ChContainer, BodyContainer, ChCard, ChText, ChName, ChTxtContainer, BtnLinkBack, BtnStyle } from '../theme/CharacterStyle'
import { CardFooter } from '../theme/CardStyle'


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

                            <CardFooter>
                                <BtnStyle >
                                    <BtnLinkBack to={`/${id}`}>back</BtnLinkBack>
                                </BtnStyle>
                            </CardFooter>
                        </ChText>
                    </ChCard>
                </BodyContainer>
            </ChContainer>
        </>
    );
}
