import { useRef, useEffect } from "react";

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
                                    <a href="https://han-na-05-22.github.io/PORTFOLIO01/index" target="_blank" >
                                        <img src={`${path}/img/pf01.png`}></img>
                                    </a>
                                </div>
                                <span>＊사진 또는 위 링크를 클릭하시면 해당 포트폴리오 사이트로 이동합니다.</span>
                                <div className="mainContent">
                                    <span>- 제작기간 : 2022.01.18 ~ 2022.02.08 ( 연휴 제외 총 2주 )</span>
                                    <b>- 사용스킬 : HTML, SCSS, JAVA SCRIPT</b>
                                    <strong>- 기획 100%/ 디자인 100%(Pinterest 디자인 참고)/ 코딩 100%</strong>
                                    <p>HTML 버전 포트폴리오는 일반 기업형 사이트 제작에 초점을 둔 포트폴리오입니다. Scss를 사용하여 코드 사용 중복을 줄였으며, import를 활용하여 컴포넌트 별로 css를 관리하였습니다. 또한, flex/ float/ position 등을 사용하여 레이아웃 배치를 하였고 Youtube, Flickr API 등을 활용하여 서브 페이지 제작을 하였습니다. 위 제작 경험을 통해 Fatch를 활용하여 비동기 서버 통신을 하는 법에 대해서도 익숙해졌습니다. 위 사이트를 만들면서 자바스크립트 기초 문법에 대해 많이 익숙해졌으며 ES5, ES6 문법을 다양하게 사용하여 작업을 해보았습니다.</p>
                                </div>
                            </dd>

                            <dt>           
                                <button> REACT 버전</button>
                            </dt>
                            <dd>
                                <a href="https://han-na-05-22.github.io/ReactPortfolio/" target="_blank" >
                                    https://han-na-05-22.github.io/PORTFOLIO02
                                </a>
                                <div className="pic">
                                    <a href="https://han-na-05-22.github.io/PORTFOLIO02/#/" target="_blank" >
                                        <img src={`${path}/img/pf02.png`}></img>
                                    </a>
                                </div>
                                <span>＊사진 또는 위 링크를 클릭하시면 해당 포트폴리오 사이트로 이동합니다.</span>
                                <div className="mainContent">
                                    <span>- 제작기간 : 2022.02.14 ~ 2022.03.07</span>
                                    <b>- 사용스킬 : SCSS, JAVA SCRIPT, REACT, REDUX</b>
                                    <strong>- 기획 100%/ 디자인 100%(Pinterest 디자인 참고)/ 코딩 100%</strong>
                                    <p>좀 더 다양한 기능을 활용하여 유니크하고 인터랙티브한 사이트를 제작하고 싶어 REACT버전 포트폴리오를 제작하게 되었습니다. 라우터를 활용하여 비동기적으로 컴포넌트를 출력하였고, Axios로 멤버별 json 데이터를 비동기적으로 호출하여 member 컴포넌트를 제작하였으며, 또한, Redux를 활용하여 Youtube, Flickr 등 데이터 전역 관리를 하였으며 관리되는 값을 useSelector로 호출하여 반복문 map를 사용하여 코드 사용 중복을 줄이며 컴포넌트들을 제작하였습니다. 마지막으로 CSS Animation, Transform, Transition 등을 사용하여 다양한 모션을 주었으며, Swiper를 사용하여 슬라이드 기능을 구현하였습니다.</p>
                                </div>
                            </dd>

                            <dt>
                                <button>소개페이지</button>
                            </dt>
                            <dd>
                                <a href="https://han-na-05-22.github.io/aboutMyPortfolio/" target="_blank" >
                                    https://han-na-05-22.github.io/aboutMyPortfolio
                                </a>
                                <div className="pic">
                                    <a href="https://han-na-05-22.github.io/aboutMyPortfolio/" target="_blank" >
                                        <img src={`${path}/img/pf03.png`}></img>
                                    </a>
                                </div>
                                <span>＊사진 또는 위 링크를 클릭하시면 해당 포트폴리오 사이트로 이동합니다.</span>
                                <div className="mainContent">
                                    <span>- 제작기간 : 2022.03.14 ~ 2022.03.18</span>
                                    <b>- 사용스킬 : SCSS, JAVA SCRIPT, REACT</b>
                                    <strong>- 기획 100%/ 디자인 100%/ 코딩 100%</strong>
                                    <p>자기소개 페이지는 그동안 포트폴리오 제작 및 스터디를 하면서 숙지 및 공부했었던 내용들을 한 번 더 복습하기 위해 최대한 여러가지 기능을 넣어 만들려고 노력하였습니다. REACT 버전으로 제작하여 NavLink로 각 메뉴별 link를 연결하였고 비동기 방식으로 컴포넌트들을 출력하였습니다. 또한, 중복을 최소화하기 위해 Async, Await를 활용하여 비동기적으로 db폴더에 있는 json파일들을 fetch 하였으며, 가져온 객체를 import해서 받아온 mp3 파일로 일부 변경 후 state에 값을 넣어주었습니다. 3개의 포트폴리오 모두 미디어 쿼리를 사용하여 반응형까지 구현하였습니다. 디자인에 초점을 두기보단 최대한 많은 모션 및 다양한 기능들을 구현하려고 노력하였습니다.</p>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </article>
                </div>
            </div>
        </section>
    );
}
