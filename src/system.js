import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from 'react';
import Page1 from './Page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Alldata from './Alldata';

function System() {
  const[data1,setData1] = useState("");
  const[data2,setData2] = useState("");
  const[data3,setData3] = useState("");
  const[data4,setData4] = useState("");

  
  const cdata1 = (data)=>{
    setData1(data);
  }
  const cdata2 = (data)=>{
    setData2(data);
  }
  const cdata3 = (data)=>{
    setData3(data);
  }
  const cdata4 = (data)=>{
    setData4(data);
  }
  return (
    <BrowserRouter >
        <Routes>
          <Route path="/" element = {<Page1 setData={cdata1}/>} />
          <Route path="/page2" element = {<Page2 setData={cdata2}/>} />
          <Route path="/page3" element = {<Page3 setData={cdata3}/>} />
          <Route path="/page4" element = {<Page4 setData={cdata4}/>} />
          <Route path="/Alldata" element = {<Alldata data1={data1} data2={data2} data3={data3} data4={data4}/>} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default System;
