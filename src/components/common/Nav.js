import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

export default function Nav(props){


    function changeColor(){
        
        const mains=document.querySelector("main");
        const lists=document.querySelectorAll(".changeColor li");

        lists.forEach((btn,index)=>{
            btn.addEventListener("click",e=>{
                e.preventDefault();
  
                for(let el of lists){
                    el.classList.remove("on");
                    mains.classList.remove("분홍","주황","보라");
                }
  
                lists[index].classList.add("on");
  
                if(lists[0].classList.contains("on")){
                    mains.classList.add("분홍");
                }
  
                if(lists[1].classList.contains("on")){
                    mains.classList.add("주황");
               }
  
                  if(lists[2].classList.contains("on")){
                    mains.classList.add("보라");
                  }
            })
        })
    }

    useEffect(()=>{
        changeColor();
    })
   

    return(
        <>
            <nav id="nav" className={props.type}>
                <h1><NavLink exact to='/home'>HANNA</NavLink></h1>
                <Gnb />
                <ul className="changeColor" onClick={changeColor}>
                        <li className="on"><b>■</b></li>
                        <li><b>■</b></li>
                        <li><b>■</b></li>
                </ul>
            </nav>
        </>
    )
}

function Gnb(props){

    return(
        <ul className="gnb">
        <li>
            <NavLink exact to='/home'>
            <FontAwesomeIcon icon={faHome} />
            HOME
            </NavLink>
        </li>
        <li>
            <NavLink to='/about'>
                <FontAwesomeIcon icon={faUser} />
                ABOUT
            </NavLink>
        </li>
        <li>
            <NavLink to='/myportfolio'>
                <FontAwesomeIcon icon={faLaptop} />
                MYPORTFOLIO
            </NavLink>
        </li>
    </ul>
    )
}