import { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
import '../../theme/imageCard.css'
import '../../theme/core.css'
// import GalleryModal from './GalleryModal'
import ReactLoading from 'react-loading';
import { HashLink as Link } from 'react-router-hash-link';

export default function ImageCardSkeleton() {

    return (
        <>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__header">
                    {/* <img className='cardimg' src={props.info.image} alt="card__image" width="600" /> */}

                </div>
                <div className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    {/* <span className={TagOption}>{props.info.genre}</span> */}

                    <p>Loading...</p>
                </div>
                <div className="card__footer">
                    <div className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </div>
                </div>
            </div>

        </>
    );
}
