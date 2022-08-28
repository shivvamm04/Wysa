import './App.css';
import React,{Component} from "react";
import Signup from './Signup';  
import Login from "./login";

class Authentic extends Component{
      constructor(props) {
        super(props)
      
        this.state = {
           page : 1, //1-signup 2-login
           msg : null,
           msgtype : 1,
           user: "shivam",
           pass: "Shivam@1234"
        }
      }
pageSwitchHandler = (event)=>{
  event.preventDefault();
  this.setState({page : !this.state.page, msg:null});
}

ragisterHandler = (event) =>{
  event.preventDefault();
  // alert("submit");
  const user = event.target.userId.value;
  const pass = event.target.password.value;
  const cnfPass = event.target.cnfPassword.value;
  if(pass !== cnfPass){
    this.setState({msg : "Password misMatched"});
  }
  this.setState({user:user, pass:pass});
  this.setState({msg:"Registered Sucessfully", msgtype:0});
  event.target.userId.value = null;
  event.target.password.value = null;
  event.target.cnfPassword.value = null;
}
loginHandler = (event) =>{
  event.preventDefault();
  const user = event.target.userId.value;
  const pass = event.target.password.value;

  if(user === this.state.user && pass === this.state.pass){
      this.setState({msg:"Login Sucessfully", msgtype:0});
      event.target.userId.value = null;
      event.target.password.value = null;
      var path = window.location.href+"page1"
      window.location.href=path; 
    }else{
      this.setState({msg:"Invalid", msgtype:1});
  }
}
      render(){
        return(
          <div className="App">
            {this.state.page ? <Signup switch = {this.pageSwitchHandler} rtr = {this.ragisterHandler} message = {this.state.msg} messageType = {this.state.msgtype}/> : 
            <Login switch = {this.pageSwitchHandler} login = {this.loginHandler} message = {this.state.msg} messageType = {this.state.msgtype}/>}
          </div>
        )
      }
}

export default Authentic;
