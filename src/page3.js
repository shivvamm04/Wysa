import './App.css';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Page3(props) {
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
      navigate("/page4");
  }
    return (
      <div >
        <h4>What time do you get out of bed for start your day ? </h4>
        <button className="btn" onClick={buttonHandler} value="04:00 am" style={{backgroundColor:'blue'}}>04:00 am</button><br/>
        <button className="btn" onClick={buttonHandler} value="05:00 am" style={{backgroundColor:'blue'}}>05:00 am</button><br/>
        <button className="btn" onClick={buttonHandler} value="06:00 am" style={{backgroundColor:'blue'}}>06:00 am</button><br/>
        <button className="btn" onClick={buttonHandler} value="07:00 am" style={{backgroundColor:'blue'}}>07:00 am</button><br/>
        <button className="btn" onClick={buttonHandler} value="08:00 am" style={{backgroundColor:'blue'}}>08:00 am</button><br/>
        <button className="btn" onClick={buttonHandler} value="09:00 am" style={{backgroundColor:'blue'}}>09:00 am</button><br/>
        <button className="btn" onClick={buttonHandler} value="10:00 am" style={{backgroundColor:'blue'}}>10:00 am</button><br/>
        <button className="btn go" onClick={nextHandler} disabled={!go}>Data recieved</button><br/>
      </div>
    );
  }
  
  export default Page3;