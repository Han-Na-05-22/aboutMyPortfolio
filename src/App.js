import Nav from './components/common/Nav';
import Profile from './components/common/Profile';

import Home from './components/main/Home';

import About from './components/sub/About';
import Myportfolio from './components/sub/Myportfolio';

import { useState, useEffect } from 'react';

import './scss/style.scss';
import {Route,Switch} from 'react-router-dom';

function App() {

  const path = process.env.PUBLIC_URL;

  const [loading, setLoading] = useState(true);

  const cacheImg = async srcArr => {
    const loaded = await srcArr.map(src=>{
      return new Promise((res, rej)=>{
        const img = new Image();

        img.src = src;
        img.onload = res();
        img.onerror = rej();
        console.log('cache');
      })
    });

    await Promise.all(loaded);
    setTimeout(()=>setLoading(false),2000);
    setLoading(false);
  }

 
  useEffect(()=>{
    
    const imgs = [
      'http://localhost:3000/aboutMyPortfolio/img/cloud1.png',
      'http://localhost:3000/aboutMyPortfolio/img/coding.gif',
      'http://localhost:3000/aboutMyPortfolio/img/sayHello.gif',
      'http://localhost:3000/aboutMyPortfolio/img/scss.png',
      'http://localhost:3000/aboutMyPortfolio/img/ex.png',
      'http://localhost:3000/aboutMyPortfolio/img/ps.png',
      'http://localhost:3000/aboutMyPortfolio/img/html.png',
      'http://localhost:3000/aboutMyPortfolio/img/css.png',
      'http://localhost:3000/aboutMyPortfolio/img/js.png',
      'http://localhost:3000/aboutMyPortfolio/img/react.png',
      'http://localhost:3000/aboutMyPortfolio/img/redux.png',
      'http://localhost:3000/aboutMyPortfolio/img/music01.png',
      'http://localhost:3000/aboutMyPortfolio/img/music04.png',
      'http://localhost:3000/aboutMyPortfolio/img/music05.png',
      'http://localhost:3000/aboutMyPortfolio/img/music06.png',
      'http://localhost:3000/aboutMyPortfolio/img/music07.png',
      'http://localhost:3000/aboutMyPortfolio/img/pf01.png',
      'http://localhost:3000/aboutMyPortfolio/img/pf02.png',
      'http://localhost:3000/aboutMyPortfolio/img/pf03.png',
      'http://localhost:3000/aboutMyPortfolio/img/member5.jpeg'

      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/cloud1.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/coding.gif',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/sayHello.gif',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/scss.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/ex.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/ps.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/html.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/css.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/js.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/react.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/redux.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/music01.png',
          // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/music01.png',
          // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/music04.png',
          // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/music05.png',
          // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/music06.png',
          // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/music07.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/pf01.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/pf02.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/pf03.png',
      // 'https://han-na-05-22.github.io/aboutMyPortfolio/img/member5.jpeg'

    ]

    cacheImg(imgs);
  },[])
  
  return (
    <div className="App">
        <main className='content'>

          <Nav />
          <Switch>

            <Route exact path='/' component={Home}></Route>
          </Switch>

          <Route path='/home' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/myportfolio' component={Myportfolio}></Route>
          <Profile />
          {/* <img src={`${path}/img/cloud1.png`}></img>
          <img src={`${path}/img/cloud1.png`}></img> */}
        </main>
        {loading ? <Popup /> : null}
    </div>
  );
}

function Popup(){
  const style={
    width: '100%', height: '100vh', backgroundColor: '#111', position: 'fixed', top: 0, left: 0, zIndex: 10
  }
  return (
    <aside className='popup' style={style}>
      loading
    </aside>
  )
}

export default App;
