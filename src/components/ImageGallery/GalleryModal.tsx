import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { Link, useHistory } from 'react-router-dom';
import '../../theme/imageCard.css'
import '../../theme/core.css'


export default function GalleryModal(props: any) {


    if (!props.show) {
        return null;
    }


    // document.addEventListener("mousedown", (event) => {

    //     if (!event.target.contains("modal")) {
    //         console.log("Clicked Inside");
    //     } else {
    //         console.log("Clicked Outside / Elsewhere");
    //     }
    // });

    return (
        <>
            <div className="modal" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">
                            {props.info.name}
                        </h4>
                    </div>
                    <img src="https://source.unsplash.com/600x400/?computer" alt="" />

                    <div className="modal-body">
                        {props.info.description}
                    </div>
                    <div className="card__footer">
                        <div className="navbtn">
                            <div className="navbtnlink-red" onClick={props.onClose}  >Close</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
