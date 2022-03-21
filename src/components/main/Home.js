// import Nav from '../common/Nav';
// import Profile from '../common/Profile';
import anime from '../../class/anime';
import Profile from '../common/Profile';
import Nav from '../common/Nav';

import {useEffect,useState,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

export default function Home(){

    const path = process.env.PUBLIC_URL;
    const home = useRef(null);

    let homeAnis,lineTop,lineRight,lineBottom,lineLeft;

    const homeAni = () =>{
        homeAnis=document.querySelector(".message .homeAni");
        lineTop = document.querySelector(".top");
        lineRight = document.querySelector(".right");
        lineBottom = document.querySelector(".bottom");
        lineLeft = document.querySelector(".left");

        new anime(lineTop,{
            prop:"width",
            value:"100%",
            duration:1000,
            callback:()=>{

                new anime(lineRight,{
                    prop : "height",
                    value : "100%",
                    duration:1000,
                    callback:()=>{
    
                        new anime(lineBottom,{
                            prop : "width",
                            value : "100%",
                            duration:1000,
                            callback:()=>{
    
                                new anime(lineLeft,{
                                    prop:"height",
                                    value : "100%",
                                    duration:1000,
                                    callback:()=>{
    
                                        homeAnis.classList.remove("off");
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

    useEffect(()=>{
        home.current.classList.add("on");
        if(home.current.classList.contains("on")){
            setTimeout(homeAni,2500);
        }
    },[]);

    return(
        <section id="Home" ref={home}>
            <div className="inner">
                <div className="wrap">
                    <article className="homeContent">
                        <h2>HANNA'S</h2>
                        <h2>PORTFOLIO</h2>
                        <div className="sayHello">
                            <img src={`${path}/img/sayHello.gif`} alt="인사하기"></img>
                            <FontAwesomeIcon icon={faComment} />
                            <span>Hi</span>
                        </div>
                        <div className="message">
                            <img src={`${path}/img/coding.gif`} alt="코딩하는 컴퓨터"></img>
                            <div className="homeAni off">
                                <div className="top"></div>
                                <div className="right"></div>
                                <div className="bottom"></div>
                                <div className="left"></div>
                                <p>안녕하세요! 코딩하는게 즐거운 미래의<br /> 프론트엔드 개발자 이한나입니다 :D!</p>
                            </div>
                        </div>
                        <strong>
                            FRONT-END DEVELOPER
                        </strong>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faHtml5} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCss3Alt} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faJs} />
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faReact} />
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
}