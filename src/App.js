import Nav from './components/common/Nav';
import Profile from './components/common/Profile';

import Main from './components/main/Main';
import Home from './components/main/Home';

import About from './components/sub/About';
import Myportfolio from './components/sub/Myportfolio';

import './scss/style.scss';
import {Route} from 'react-router-dom';

function App() {

  const path = process.env.PUBLIC_URL;
  
  return (
    <div className="App">
      <Route exact path='/' component={Main}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/myportfolio' component={Myportfolio}></Route>
      <img src={`${path}/img/cloud1.png`}></img>
      <img src={`${path}/img/cloud2.png`}></img>
      <img src={`${path}/img/cloud1.png`}></img>

      <img src={`${path}/img/cloud2.png`}></img>
      <img src={`${path}/img/cloud1.png`}></img>
      <img src={`${path}/img/cloud2.png`}></img>
    </div>
  );
}

export default App;
