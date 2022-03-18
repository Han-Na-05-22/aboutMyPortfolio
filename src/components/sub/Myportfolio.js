import Profile from '../common/Profile';
import Nav from '../common/Nav';
import Home from '../main/Home';

import { useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Myportfolio(){

    const myportfolio = useRef(null);
    const path = process.env.PUBLIC_URL;


    let dt,dd,btn;

    const act = () =>{
        dt = document.querySelectorAll("dt");
        dd = document.querySelectorAll("dd");
        btn = document.querySelectorAll("dt button");

        btn.forEach((btns,index) => {
            btns.addEventListener("click",e=>{
                e.preventDefault();

                for(let el of dt){
                    el.classList.remove("on");
                }
    
                for(let el of dd){
                    el.classList.remove("on");
                }
                dd[index].classList.add("on");
                dt[index].classList.add("on");
            })
        });
    }


    useEffect(()=>{
        myportfolio.current.classList.add("on");
        act();
    },[]);

    return(
        <section id="Myportfolio" ref={myportfolio}>
            <div className="inner">
                <div className="wrap">
                <article className="myportfolioContent">
                    <h2>MY PORTFOLIO</h2>
                    <div className="wrap">
                        <dl id="tab">
                            <dt className="on">
                                <button>HTML 버전</button>
                            </dt>
                            <dd className="on">
                                <a href="https://han-na-05-22.github.io/PORTFOLIO01/index" target="_blank" >
                                    https://han-na-05-22.github.io/PORTFOLIO01
                                </a>
                                <div className="pic">
                                    <img src={`${path}/img/pf01.png`}></img>
                                </div>
                                <span>＊사진 위 링크를 클릭하시면 해당 포트폴리오 사이트로 이동합니다.</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat facere cum quasi accusantium a, iusto ex aliquid vero voluptatum debitis quae! Veritatis quasi obcaecati nostrum quidem nam, quis, iure harum qui id impedit exercitationem nesciunt maxime odio odit tenetur eligendi esse ratione dolorum? Possimus quia quam tempore odio quaerat, voluptatum enim distinctio officiis itaque in, at deserunt commodi aliquid blanditiis exercitationem sed sequi dolorum porro, optio beatae! Amet consequuntur vitae porro velit? Nam, est obcaecati consectetur nihil quidem atque consequatur voluptates.</p>
                            </dd>

                            <dt>           
                                <button> REACT 버전</button>
                            </dt>
                            <dd>
                                <a href="https://han-na-05-22.github.io/ReactPortfolio/" target="_blank" >
                                    https://han-na-05-22.github.io/ReactPortfolio
                                </a>
                                <div className="pic">
                                    <img src={`${path}/img/pf02.png`}></img>
                                </div>
                                <span>＊사진 위 링크를 클릭하시면 해당 포트폴리오 사이트로 이동합니다.</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat facere cum quasi accusantium a, iusto ex aliquid vero voluptatum debitis quae! Veritatis quasi obcaecati nostrum quidem nam, quis, iure harum qui id impedit exercitationem nesciunt maxime odio odit tenetur eligendi esse ratione dolorum? Possimus quia quam tempore odio quaerat, voluptatum enim distinctio officiis itaque in, at deserunt commodi aliquid blanditiis exercitationem sed sequi dolorum porro, optio beatae! Amet consequuntur vitae porro velit? Nam, est obcaecati consectetur nihil quidem atque consequatur voluptates.</p>
                            </dd>

                            <dt>
                                <button>소개페이지</button>
                            </dt>
                            <dd>
                                <a href="https://han-na-05-22.github.io/aboutMyPortfolio/" target="_blank" >
                                    https://han-na-05-22.github.io/aboutMyPortfolio
                                </a>
                                <div className="pic">
                                    <img src={`${path}/img/pf03.png`}></img>
                                </div>
                                <span>＊사진 위 링크를 클릭하시면 해당 포트폴리오 사이트로 이동합니다.</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat facere cum quasi accusantium a, iusto ex aliquid vero voluptatum debitis quae! Veritatis quasi obcaecati nostrum quidem nam, quis, iure harum qui id impedit exercitationem nesciunt maxime odio odit tenetur eligendi esse ratione dolorum? Possimus quia quam tempore odio quaerat, voluptatum enim distinctio officiis itaque in, at deserunt commodi aliquid blanditiis exercitationem sed sequi dolorum porro, optio beatae! Amet consequuntur vitae porro velit? Nam, est obcaecati consectetur nihil quidem atque consequatur voluptates.</p>
                            </dd>
                        </dl>
                    </div>
                </article>
                </div>
            </div>
        </section>
    );
}
