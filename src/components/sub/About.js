import {useEffect,useState,useRef} from 'react';
import music1 from '../../music/1.mp3';
import music2 from '../../music/2.mp3';
import music3 from '../../music/3.mp3';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function About(){

    const about = useRef(null);
    const path = process.env.PUBLIC_URL;
    const [items, setItems] = useState([]);

    const createDOM = async () =>{
        await fetch(`${path}/DB/data.json`)
        .then(data=>{
            return data.json();
        })
        .then(json=>{
            
            json.data[0].audio = music1;
            json.data[1].audio = music2;
            json.data[2].audio = music3;
            json.data[3].audio = music1;
            json.data[4].audio = music3;

            setItems(json.data);
            let items="";
        })
    }

    let lists,audios,imgs,plays,pauses,loads;


    function stopMusic(){
        for(let el of audios){
            el.pause();
        }
    }

    const aboutMusic = () =>{

        audios = document.querySelectorAll(".music audio");
        imgs = document.querySelectorAll(".music img");
        plays = document.querySelectorAll(".music ul .play");
        pauses = document.querySelectorAll(".music ul .pause");
        loads = document.querySelectorAll(".music ul .load");

        plays.forEach((btn,idx)=>{
            btn.addEventListener("click",e=>{
                e.preventDefault();

                stopMusic();

                lists = document.querySelectorAll(".music .wrap");

                for(let el of lists){
                    el.classList.remove("on");
                }
                lists[idx].classList.add("on");
                audios[idx].play();
            })
        })

        pauses.forEach((btn,idx)=>{
            btn.addEventListener("click",e=>{
                e.preventDefault();

                lists = document.querySelectorAll(".music .wrap");

                for(let el of lists){
                    el.classList.remove("on");
                    audios[idx].pause();
                }
            })
        })


        loads.forEach((btn,idx)=>{
            btn.addEventListener("click",e=>{
                e.preventDefault();

                lists = document.querySelectorAll(".music .wrap");

                    for(let el of lists){
                        el.classList.remove("on");
                        stopMusic();
                    }         

                setTimeout(()=>{
                lists[idx].classList.add("on");
                audios[idx].play();
                },1000)
            })
        })
    }

    useEffect(()=>{
        about.current.classList.add("on");
        createDOM();
        aboutMusic();
    },[]);
    
    return(
        <section id="About" ref={about}>
            <div className="inner">
                <div className="wrap">
                <article className="aboutContent">
                    <div className="aboutMe">
                        <h2>ABOUT ME</h2>
                        <p>
                        저는 하고자 하는 일에 있어서는 절대 주춤하지 않고 도전하며 실천하는 한다면 하는 사람입니다.
                        제가 좋아하는 취미, 공부, 운동 등 지금까지도 꾸준히 해오고 있으며,
                        시간의 소중함을 잊지 않고 항상 나 자신의 발전을 위해 끊임없이 노력하고 있습니다.
                        홈페이지 제작하는 것을 처음 접했을 때 제가 작업한 코드에 대한 결과물을 바로 눈으로 확인할 수 있어서 흥미로웠으며,
                        공부를 계속 해나갈 때쯤에 문득, "아! 내가 지금 단순히 텍스트 박스 하나를 만들어서 보여주는 게 아닌 좀 더 시각적인 효과를 넣어서 만들어 보면 어떨까?" 등등
                        여러 가지 부분에 대해서 생각하게 되었고 그 결과 현재는 사람들이 조금 더 쉽고 편리하게 이용할 수 있고 인터랙티브한 홈페이지를 만드는 게 저의 꿈이 되었습니다.
                        </p>
                    </div>
                    <div className="mySkill">
                        <h2>MY SKILL</h2>
                        <ul>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/ex.png`}
                                alt="엑셀"></img>
                            </li>
                            <li> 
                                <div className="boxBg"></div>
                                <img src={`${path}/img/ps.png`}alt="포토샵"></img>
                            </li>
                            <li>
                            <div className="boxBg"></div>
                                <img src={`${path}/img/html.png`}alt="html"></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/css.png`}alt="css"></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/scss.png`}alt="사스"></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/js.png`}alt="자바스크립트"></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/react.png`}alt="리액트"></img>
                            </li>
                            <li>
                                <div className="boxBg"></div>
                                <img src={`${path}/img/redux.png`}alt="리덕스"></img>
                            </li>
                        </ul>
                    </div>
                    <div className="music">
                        <Swiper modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        centeredSlides={true}
                        navigation
                        loop={true}
                        >
                            {items.map((item,idx)=>{
                                return(
                                    <SwiperSlide key={idx} onClick={()=>{}}>
                                        <div className="wrap">
                                            <div className="pic">
                                                <img src={`${path}/img/${item.pic}`} alt="디코드"/>
                                            </div>
                                            <div className="txt">
                                                <strong>{item.title}</strong>
                                                <span>{item.name}</span>
                                            </div>
                                            <ul>
                                                <li className="play" onClick={aboutMusic}>
                                                    <FontAwesomeIcon icon={faPlay} />
                                                </li>
                                                <li className="pause" onClick={aboutMusic}>
                                                    <FontAwesomeIcon icon={faPause} />
                                                </li>
                                                <li className="load" onClick={aboutMusic}>
                                                    <FontAwesomeIcon icon={faRedo} />
                                                 </li>
                                                <audio src={item.audio} />
                                            </ul>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </article>
                </div>
            </div>
        </section>
    );
}
