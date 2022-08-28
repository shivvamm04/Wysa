import './App.css';
import React,{ useState} from 'react';
import System from './system';
import Authentic from './authentic'
// import {useNavigate} from 'react-router-dom';


function App() {
  
  const[isLogin,setLogin] = useState(false);
  // const navigate = useNavigate();
  const logFun = (data)=>{
    setLogin(data);
    // navigate("/");
  }
  return (
    <div className="App">
      {isLogin?<System />:<Authentic auth = {logFun} />}
    </div>
  );
}

export default App;
