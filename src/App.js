import React, { useState } from 'react';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  const [pageNum,setPageNum] = useState(1);
  switch(pageNum) {
    case 1 : return <Page1 setPageNum={setPageNum} pageNum={pageNum}/>;
    case 2 : return <Page2 setPageNum={setPageNum} pageNum={pageNum}/>
  }
}
export default App;
