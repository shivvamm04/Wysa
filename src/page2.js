import './App.css';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Page2(props) {
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
        navigate("/page3");
    }
    return (
      <div >
        <h4>What time do you go to bed for sleep ? </h4>
        <button className="btn" onClick={buttonHandler} value="08:00 pm" style={{backgroundColor:'blue'}}>08:00 pm</button><br/>
        <button className="btn" onClick={buttonHandler} value="09:00 pm" style={{backgroundColor:'blue'}}>09:00 pm</button><br/>
        <button className="btn" onClick={buttonHandler} value="10:00 pm" style={{backgroundColor:'blue'}}>10:00 pm</button><br/>
        <button className="btn" onClick={buttonHandler} value="11:00 pm" style={{backgroundColor:'blue'}}>11:00 pm</button><br/>
        <button className="btn" onClick={buttonHandler} value="00:00 am" style={{backgroundColor:'blue'}}>00:00 am</button><br/>
        <button className="btn" onClick={buttonHandler} value="01:00 am" style={{backgroundColor:'blue'}}>01:00 am</button><br/>
        <button className="btn go" onClick={nextHandler} disabled={!go}>Go</button><br/>
      </div>
    );
  }
  
  export default Page2;