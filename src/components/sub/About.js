import Profile from '../common/Profile';
import Nav from '../common/Nav';
import {useEffect,useState,useRef} from 'react';
import axios from 'axios';
import music1 from '../../music/1.mp3';
import music2 from '../../music/2.mp3';
import music3 from '../../music/3.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faPause } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function About(){

    const about = useRef(null);
    const path = process.env.PUBLIC_URL;
    const lists = document.querySelectorAll(".music .wrap");
    
    // audios.forEach((zz,index)=>{
    //     zz.addEventListener("click",e=>{
    //         e.preventDefault();
    //         audios[index].classList.add("on");

    //         // let isOn = audios[index].classList.contains("on"); 
    //         // console.log(isOn);

    //         // if(isOn){
                
    //         //     audios[index].classList.remove("on");
    //         // }
    //         // audios[index].classList.add("on");
    //     })
    // })


    // if(audios.play()){
    //     lists.forEach((btn,index)=>{
    //         btn.addEventListener("click",e=>{
    //             e.preventDefault();

    //             for(let el of lists){
    //                 el.classList.remove("on");
    //             }
    //             lists[index].classList.add("on");
    //         })
    //     })
    // }

  
        // pauses.forEach((btn2,index2)=>{
        //     btn2.addEventListener("click",e=>{
        //         e.preventDefault();

        //         for(let el of lists){
        //             el.classList.remove("on");
        //         }
        //         lists[index2].classList.remove("on");
        //     })
        // })



        // loads.forEach((btn,index)=>{
        //     btn.addEventListener("click",e=>{
        //         e.preventDefault();

        //         for(let el of lists){
        //             el.classList.remove("on");
        //         }
        //         lists[index].classList.add("on");
        //     })
        // })

    useEffect(()=>{
        about.current.classList.add("on");
    },[]);
    
    return(
        <section id="About" ref={about}>
            <div className="inner">
                <div className="wrap">
                <article className="aboutContent">
                    <div className="aboutMe">
                        <h2>ABOUT ME</h2>
                        <p>
                            안녕하세요. 코딩하는 것이 즐거운 미래의 프론트엔드 개발자 이한나입니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero nulla incidunt exercitationem molestiae corporis at voluptatem quae earum eos, iure explicabo placeat accusamus fugiat impedit doloribus sequi beatae ducimus libero doloremque. Eaque, voluptates? Sint atque ipsa similique nam pariatur totam iste minus accusamus enim.
                        </p>
                    </div>
                    <div className="mySkill">
                        <h2>MY SKILL</h2>
                        <ul>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/ex.png`}></img>
                            </li>
                            <li> 
                                <div className="boxBg"></div>
                                <img src={`${path}/img/ps.png`}></img>
                            </li>
                            <li>
                            <div className="boxBg"></div>
                                <img src={`${path}/img/html.png`}></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/css.png`}></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/scss.png`}></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/js.png`}></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/react.png`}></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/redux.png`}></img>
                            </li>
                        </ul>
                    </div>
                    <div className="music">
                        <h2>MUSIC PLAYER</h2>
                        <Swiper modules={[Navigation]}
                        spaceBetween={100}
                        slidesPerView={1}
                        centeredSlides={true}
                        navigation
                        loop={true}
                        >
                            <SwiperSlide onClick={()=>{}}>
                                <div className="wrap">
                                    <div className="txt">
                                        <strong>Music01</strong>
                                        <span>- hanna -</span>
                                    </div>
                                    <div className="pic">
                                        <img src={`${path}/img/music01.png`} />
                                    </div>
                                    <audio muted controls src={music1}>
                                    </audio>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide onClick={()=>{}}>
                                <div className="wrap">
                                    <div className="txt">
                                        <strong>Music02</strong>
                                        <span>- hanna -</span>
                                    </div>
                                    <div className="pic">
                                        <img src={`${path}/img/music01.png`} />
                                    </div>
                                    <audio muted controls src={music2}>
                                    </audio>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide onClick={()=>{}}>
                                <div className="wrap">
                                    <div className="txt">
                                        <strong>Music03</strong>
                                        <span>- hanna -</span>
                                    </div>
                                    <div className="pic">
                                        <img src={`${path}/img/music01.png`} />
                                    </div>
                                    <audio muted controls src={music3}>
                                    </audio>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                </article>
                </div>
            </div>
        </section>
    );
}
