import { useState, useEffect } from 'react';
import { Card ,CardBody,CardFooter} from '../../theme/CardStyle'
import ReactLoading from 'react-loading';
import { HashLink as Link } from 'react-router-hash-link';

import { NavBtnStyle} from '../../theme/NavStyle'
export default function ImageCardSkeleton() {

    return (
        <>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            <Card >
                <CardBody className="card__body">
                    <ReactLoading type='bubbles' color='black' height={25} width={50} />
                    <p>Loading...</p>
                </CardBody>
                <CardFooter className="card__footer">
                    <NavBtnStyle className="navbtn">
                        <ReactLoading type='bubbles' color='black' height={25} width={50} />

                    </NavBtnStyle>
                </CardFooter>
            </Card>
            

        </>
    );
}
