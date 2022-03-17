import Home from './Home';
import {useEffect, useRef,useState} from 'react';

export default function Main(){
    const main = useRef(null);

    return(
        <div id="main" ref={main}>
            <Home />
        </div>
    );
}