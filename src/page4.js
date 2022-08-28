import './App.css';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Page4(props) {
    const[data,setData] = useState("");
    const[go,setGo] = useState(false);
    
    const navigate = useNavigate();
    const buttonHandler = (e)=>{
        let d = e.target.value;
        setData(d);
        setGo(true);
        
    }
    const nextHandler = ()=>{
      props.setData(data);
      navigate("/Alldata");
  }
    return (
      <div>
        <h4>What time do you get out of bed for start your day ? </h4>
        <button className="btn" onClick={buttonHandler} value="3 hrs" style={{backgroundColor:'blue'}}>3 hrs</button><br/>
        <button className="btn" onClick={buttonHandler} value="4 hrs" style={{backgroundColor:'blue'}}>4 hrs</button><br/>
        <button className="btn" onClick={buttonHandler} value="5 hrs" style={{backgroundColor:'blue'}}>5 hrs</button><br/>
        <button className="btn" onClick={buttonHandler} value="6 hrs" style={{backgroundColor:'blue'}}>6 hrs</button><br/>
        <button className="btn" onClick={buttonHandler} value="7 hrs" style={{backgroundColor:'blue'}}>7 hrs</button><br/>
        <button className="btn" onClick={buttonHandler} value="8 hrs" style={{backgroundColor:'blue'}}>8 hrs</button><br/>
        <button className="btn" onClick={buttonHandler} value="9 hrs" style={{backgroundColor:'blue'}}>9 hrs</button><br/>
        <button className="btn go" onClick={nextHandler} disabled={!go}>Data recieved</button><br/>
      </div>
    );
  }
  
  export default Page4;