import './App.css';
import React,{ useState} from 'react';
import System from './system';
import Authentic from './authentic'



function App() {
  
  const[isLogin,setLogin] = useState(false);
  
  const logFun = (data)=>{
    setLogin(data);
  }
  return (
    <div className="App">
      {isLogin?<System />:<Authentic auth = {logFun} />}
    </div>
  );
}

export default App;
