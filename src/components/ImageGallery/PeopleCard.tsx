import { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import { Card, CardBody, CardFooter } from '../../theme/CardStyle'
import { NavBtnStyle, NavBtnLinkViewMore, NavBtnLinkRed } from '../../theme/NavStyle'
import { current, clear } from '../../features/counter/currentCharacterCache'
import { useSelector, useDispatch } from 'react-redux'

import '../../theme/imageCard.css'

export default function ImageCard(props: any) {
    const [TagOption, setTagOption] = useState("tag tag-blue");
    const [show, setShow] = useState(false);
    const currentCharacter = useSelector((state: any) => state.currentCharacter.value);
    const dispatch = useDispatch()

    useEffect(() => {
        switch (props.info.gender) {
            case "male": setTagOption('tag tag-blue')
                break;
            case "female": setTagOption('tag tag-red')
                break;
            default: setTagOption('tag tag-brown')
        }
    }, [props.info.gender]);

    return (
        <>
            <Card >
                <CardBody >
                    <span className={TagOption}>{props.info.gender}</span>
                    {/* <p>{props.info.description}</p> */}
                    <h4>{props.info.name}</h4>
                </CardBody>
                <CardFooter>
                    <NavBtnStyle >
                        <NavBtnLinkViewMore to="/characters" onClick={() => { dispatch(current(props.info)); }} >View More</NavBtnLinkViewMore>
                        {/* <NavBtnLinkRed onClick={() => { dispatch(clear()); }}>clear {currentCharacter}</NavBtnLinkRed> */}
                    </NavBtnStyle>
                </CardFooter>
            </Card>

        </>
    );
}
