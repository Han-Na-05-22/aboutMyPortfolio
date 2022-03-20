import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";
export default function Profile(){

    const path = process.env.PUBLIC_URL;

    let clock;

    const dates = () =>{

        clock=document.querySelector("#Profile .inner .wrap .dateTime");

        const date2 = new Date();
        const hours = String(date2.getHours()).padStart(2,"0");
        const minutes = String(date2.getMinutes()).padStart(2,"0");
        const seconds = String(date2.getSeconds()).padStart(2,"0");

        clock.innerHTML=`
        <strong>
        ${hours}:${minutes}:${seconds}
        </strong>
        `;

        return clock;
    }
    useEffect(()=>{
        dates();
        setInterval(dates,1000);
    },[]);

    return(
        <article id="Profile">
            <div className="inner">
                <div className="wrap">
                    <div className="myphoto">
                        <span>github.com/Han-Na-05-22</span>
                        <img src={`${path}/img/Me.jpg`}></img>
                        <strong>HANNA LEE</strong>
                        <ul>
                        <li>
                            <FontAwesomeIcon icon={faPhone} />
                            <b>010-5219-8796</b>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faDesktop} />
                            <b>github.com/Han-Na-05-22</b>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <b>gkssktkfkd5@naver.com</b>
                        </li>
                    </ul>
                    </div>
                    <div className="dateTime">

                    </div>
                </div>
            </div>
        </article>
    );
}
