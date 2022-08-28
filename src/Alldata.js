import './App.css';
// import React,{useState} from 'react';
// import {useNavigate} from 'react-router-dom';

function Alldata(props){
    return(
        <div >
            <h1>Collected Data</h1>
            <h4>Struggling from : <span style={{color:'gray'}}>{props.data1}</span></h4>
            <h4>Go to bed : <span style={{color:'gray'}}>{props.data2}</span></h4>
            <h4>weak up : <span style={{color:'gray'}}>{props.data3}</span></h4>
            <h4>Deep sleep : <span style={{color:'gray'}}>{props.data4}</span></h4>
        </div>
    )
}
export default Alldata;