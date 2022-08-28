import './App.css';
import React,{useState} from 'react';

function Page1(props) {
    const[data,setData] = useState("");
    const[go,setGo] = useState(false);
    
    const buttonHandler = (e)=>{
        let d = e.target.value;
        props.setData(data);
        setData(d);
        setGo(true);    
    }

    const nextHandler = ()=>{
      var path = window.location.href+"1";
      window.location.href = path;
    }
    return (
      <div className="App">
        <h4>That's Great goal. How long have you been struggling with your sleep ? {data}</h4>
        <button className="btn" onClick={buttonHandler} value="op1" style={{backgroundColor:'blue'}}>Option 1</button><br/>
        <button className="btn" onClick={buttonHandler} value="op2" style={{backgroundColor:'blue'}}>Option 2</button><br/>
        <button className="btn" onClick={buttonHandler} value="op3" style={{backgroundColor:'blue'}}>Option 3</button><br/>
        <button className="btn go" onClick={nextHandler} disabled={!go}>Go</button><br/>
      </div>
    );
  }
  
  export default Page1;