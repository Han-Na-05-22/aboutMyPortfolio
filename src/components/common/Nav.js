import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

export default function Nav(props){

    return(
        <>
            <nav id="nav" className={props.type}>
                <h1><NavLink exact to='/'>HANNA</NavLink></h1>
                <Gnb />
                <ul className="changeColor">
                        <li className="on"><b>■</b></li>
                        <li><b>■</b></li>
                        <li><b>■</b></li>
                </ul>
            </nav>
        </>
    )
}

function Gnb(props){
    const active={color:'pink'}

    return(
        <ul className="gnb">
        <li>
            <NavLink activeStyle={active} exact to='/'>
            <FontAwesomeIcon icon={faHome} />
            HOME
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={active} to='/about'>
                <FontAwesomeIcon icon={faUser} />
                ABOUT
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={active} to='/myportfolio'>
                <FontAwesomeIcon icon={faLaptop} />
                MYPORTFOLIO
            </NavLink>
        </li>
    </ul>
    )
}