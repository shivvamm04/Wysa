import './App.css';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';


function Page1(props) {
    const[data,setData] = useState("");
    const[go,setGo] = useState(false);
     const navigate = useNavigate();
    
    const buttonHandler = (e)=>{
        let d = e.target.value;
        setData(d);
        setGo(true);    
      }
      
      const nextHandler = (event)=>{
        event.preventDefault();
        props.setData(data);
      navigate("/page2");
    }
    return (
      <div >
        <h4>That's Great goal. How long have you been struggling with your sleep ? </h4>
        <form action="/page2" onSubmit={nextHandler} method="post">
          <button className="btn" onClick={buttonHandler} value="Less than 2 weeks" type="button" style={{backgroundColor:'blue'}}>Less than 2 weeks</button><br/>
          <button className="btn" onClick={buttonHandler} value="2-8 weeks" type="button" style={{backgroundColor:'blue'}}>2 to 8 weeks</button><br/>
          <button className="btn" onClick={buttonHandler} value="More than 8 weeks" type="button" style={{backgroundColor:'blue'}}>More then 8 weeks</button><br/>
          <button className="btn go" type="submit" disabled={!go}>Go</button><br/>
        </form>
      </div>
    );
  }
  
  export default Page1;