import { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, CardSelected } from '../../theme/CardStyle'
import { NavBtnStyle, NavBtnLinkViewMore } from '../../theme/NavStyle'
import { current } from '../../features/counter/currentCharacterCache'
import { useDispatch } from 'react-redux'


import '../../theme/imageCard.css'



export default function ImageCard(props: any) {
    const [TagOption, setTagOption] = useState("tag tag-blue");
    const [show, setShow] = useState(false);
    // const currentCharacter = useSelector((state: any) => state.currentCharacter.value);
    const dispatch = useDispatch()

    useEffect(() => {
        switch (props.info.gender) {
            case "male": setTagOption('tag tag-blue');
                break;
            case "female": setTagOption('tag tag-red')
                break;
            default: setTagOption('tag tag-brown')
        }

    }, [props.info.gender, props.info, props]);

    useEffect(() => {
        if (props.selected) {
            setShow(true)
        } else { setShow(false) }
    }, [props.selected]);
    return (
        <>
            {(show) ?
                <CardSelected id={props.id}  >
                    <CardBody >
                        <span className={TagOption}>{props.info.gender}</span>
                        {/* <p>{props.info.description}</p> */}
                        <h4>{props.info.name}</h4>
                    </CardBody>
                    <CardFooter>
                        <NavBtnStyle >
                            <NavBtnLinkViewMore to={`/characters/${props.id}`} onClick={() => { dispatch(current(props.info)); }} >View More</NavBtnLinkViewMore>
                            {/* <NavBtnLinkRed onClick={() => { dispatch(clear()); }}>clear {currentCharacter}</NavBtnLinkRed> */}
                        </NavBtnStyle>
                    </CardFooter>
                </CardSelected> :
                <Card id={props.id} >
                    <CardBody >
                        <span className={TagOption}>{props.info.gender}</span>
                        {/* <p>{props.info.description}</p> */}
                        <h4>{props.info.name}</h4>
                    </CardBody>
                    <CardFooter>
                        <NavBtnStyle >
                            <NavBtnLinkViewMore to={`/characters/${props.id}`} onClick={() => { dispatch(current(props.info)); }} >View More</NavBtnLinkViewMore>
                            {/* <NavBtnLinkRed onClick={() => { dispatch(clear()); }}>clear {currentCharacter}</NavBtnLinkRed> */}
                        </NavBtnStyle>
                    </CardFooter>
                </Card>}

        </>
    );
}
