import { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import '../../theme/imageCard.css'
import '../../theme/core.css'
// import GalleryModal from './GalleryModal'

import { HashLink as Link } from 'react-router-hash-link';
export default function ImageCard(props: any) {
    const [TagOption, setTagOption] = useState("tag tag-blue");
    const [show, setShow] = useState(false);

    useEffect(() => {
        switch (props.info.genre) {
            case "FPS": setTagOption('tag tag-blue')
                break;
            case "2D": setTagOption('tag tag-brown')
                break;
            case "Survival": setTagOption('tag tag-red')
                break;
            case "ROUGELIKE": setTagOption('tag tag-green')
                break;
            default: setTagOption('tag tag-blue')
        }
    }, [props.info.genre]);

    return (
        <>
            <div className="card">
                <div className="card__header">
                    <img className='cardimg' src={props.info.image} alt="card__image" width="600" />
                </div>
                <div className="card__body">
                    <span className={TagOption}>{props.info.genre}</span>
                    <h4>{props.info.name}</h4>
                    <p>{props.info.description}</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <Link className="navbtnlink" to="/characters"  >View More</Link>

                    </div>
                </div>
            </div>

        </>
    );
}
