import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from 'react';
import Page1 from './Page1';
import Page2 from './page2';
import Page3 from './page3';
import Authentic from './authentic';


function App() {
  const[data1,setData1] = useState("1");
  const[data2,setData2] = useState("2");
  const[data3,setData3] = useState("3");

 
  return (
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element = {<Authentic />} />
          <Route path="/page1" element = {<Page1 setData={setData1}/>} />
          <Route path="/page11" element = {<Page2 setData={setData2}/>} />
          <Route path="/page111" element = {<Page3 setData={setData3}/>} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
