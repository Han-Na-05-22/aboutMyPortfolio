import Profile from '../common/Profile';
import Nav from '../common/Nav';

import { useEffect, useRef, useState } from "react";

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
        <>
            <main className="content myportfolio">
                <div className="inner">
                    <section id="Myportfolio" ref={myportfolio}>
                        <div className="inner">
                            <div className="wrap">
                            <Nav />
                            <article className="myportfolioContent">
                                <h2>MY PORTFOLIO</h2>

                                <div className="wrap">
                                <dl id="tab">
                                    <dt className="on">
                                        <button>HTML 버전</button>
                                    </dt>
                                    <dd className="on">
                                        <img src={`${path}/img/img01.png`}/>
                                        <span>＊사진을 클릭하시면 페이지 섹션별로 상세설명 확인이 가능합니다.</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat facere cum quasi accusantium a, iusto ex aliquid vero voluptatum debitis quae! Veritatis quasi obcaecati nostrum quidem nam, quis, iure harum qui id impedit exercitationem nesciunt maxime odio odit tenetur eligendi esse ratione dolorum? Possimus quia quam tempore odio quaerat, voluptatum enim distinctio officiis itaque in, at deserunt commodi aliquid blanditiis exercitationem sed sequi dolorum porro, optio beatae! Amet consequuntur vitae porro velit? Nam, est obcaecati consectetur nihil quidem atque consequatur voluptates. Commodi ipsam tempore ab fugit neque. Velit sunt in magnam aliquam eligendi nulla asperiores nesciunt, cumque libero sit?</p>
                                    </dd>

                                    <dt>                    
                                        <button> REACT 버전</button>
                                    </dt>
                                    <dd>
                                        <img src={`${path}/img/img02.png`}/>
                                        <span>＊사진을 클릭하시면 페이지 섹션별로 상세설명 확인이 가능합니다.</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat facere cum quasi accusantium a, iusto ex aliquid vero voluptatum debitis quae! Veritatis quasi obcaecati nostrum quidem nam, quis, iure harum qui id impedit exercitationem nesciunt maxime odio odit tenetur eligendi esse ratione dolorum? Possimus quia quam tempore odio quaerat, voluptatum enim distinctio officiis itaque in, at deserunt commodi aliquid blanditiis exercitationem sed sequi dolorum porro, optio beatae! Amet consequuntur vitae porro velit? Nam, est obcaecati consectetur nihil quidem atque consequatur voluptates. Commodi ipsam tempore ab fugit neque. Velit sunt in magnam aliquam eligendi nulla asperiores nesciunt, cumque libero sit?</p>
                                    </dd>

                                    <dt>
                                        <button>소개페이지</button>
                                    </dt>
                                    <dd>
                                        <img src={`${path}/img/img03.png`}/>
                                        <span>＊사진을 클릭하시면 페이지 섹션별로 상세설명 확인이 가능합니다.</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat facere cum quasi accusantium a, iusto ex aliquid vero voluptatum debitis quae! Veritatis quasi obcaecati nostrum quidem nam, quis, iure harum qui id impedit exercitationem nesciunt maxime odio odit tenetur eligendi esse ratione dolorum? Possimus quia quam tempore odio quaerat, voluptatum enim distinctio officiis itaque in, at deserunt commodi aliquid blanditiis exercitationem sed sequi dolorum porro, optio beatae! Amet consequuntur vitae porro velit? Nam, est obcaecati consectetur nihil quidem atque consequatur voluptates. Commodi ipsam tempore ab fugit neque. Velit sunt in magnam aliquam eligendi nulla asperiores nesciunt, cumque libero sit?</p>
                                    </dd>
                                </dl>

                                </div>
                            </article>
                            <Profile />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
