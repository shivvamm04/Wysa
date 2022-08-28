import './App.css';
import React,{useState} from 'react';

function Page3(props) {
    const[data,setData] = useState("");
    const[go,setGo] = useState(false);
    
    const buttonHandler = (e)=>{
        let d = e.target.value;
        setData(d);
        setGo(true);
        
    }
  
    return (
      <div className="App">
        <h4>What time do you get out of bed for start your day ? {data}</h4>
        <button className="btn" onClick={buttonHandler} value="op1" style={{backgroundColor:'blue'}}>Option 1</button><br/>
        {/* <button className="btn" onClick={buttonHandler} value="op2" style={{backgroundColor:'blue'}}>Option 2</button><br/>
        <button className="btn" onClick={buttonHandler} value="op3" style={{backgroundColor:'blue'}}>Option 3</button><br/> */}
        <button className="btn go" disabled={!go}>Data recieved</button><br/>
      </div>
    );
  }
  
  export default Page3;