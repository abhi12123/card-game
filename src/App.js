import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import ShuffledPage from './components/ShuffledPage';

const App = () => {
  //pageNum returns respective pages
  const [pageNum,setPageNum] = useState(1);
  const [playerArray,setPlayerArray] = useState([]);
  switch(pageNum) {
    case 1 : return <LandingPage setPageNum={setPageNum} pageNum={pageNum} setPlayerArray={setPlayerArray}/>;
    case 2 : return <ShuffledPage setPageNum={setPageNum} pageNum={pageNum} playerArray={playerArray}/>;
    default : return <LandingPage setPageNum={setPageNum} pageNum={pageNum} setPlayerArray={setPlayerArray}/>;
  }
}
export default App;
