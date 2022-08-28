import './App.css';
import React,{useState} from 'react';

function Page2(props) {
    const[data,setData] = useState("");
    const[go,setGo] = useState(false);
    
    const buttonHandler = (e)=>{
        let d = e.target.value;
        setData(d);
        setGo(true);
        
    }
    const nextHandler = ()=>{
        var path = window.location.href+"1";
        var setData1 = props.setData;
        setData1(data);
        window.location.href = path;
    }
    return (
      <div className="App">
        <h4>What time do you go to bed for sleep ? {data}</h4>
        <button className="btn" onClick={buttonHandler} value="op1" style={{backgroundColor:'blue'}}>Option 1</button><br/>
        <button className="btn" onClick={buttonHandler} value="op2" style={{backgroundColor:'blue'}}>Option 2</button><br/>
        {/* <button className="btn" onClick={buttonHandler} value="op3" style={{backgroundColor:'blue'}}>Option 3</button><br/> */}
        <button className="btn go" onClick={nextHandler} disabled={!go}>Go</button><br/>
      </div>
    );
  }
  
  export default Page2;