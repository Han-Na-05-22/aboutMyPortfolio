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
        </main>
          <img src={`${path}/img/cloud1.png`} alt="배경 구름모션"></img>
          <img src={`${path}/img/cloud1.png`} alt="배경 구름모션"></img>
    </div>
  );
}

export default App;