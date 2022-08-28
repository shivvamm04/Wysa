import './App.css';
import axios from 'axios';


function Alldata(props){

    const clickhandler = ()=>{
        const dt = `field1=${props.data1}&field2=${props.data2}&field3=${props.data3}&field4=${props.data4}`;
        axios({
          method: 'post',
          url: 'http://localhost:8000/',
          data: dt
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
    }
    return(
        <div >
            <h1>Collected Data</h1>
            <h4>Struggling from : <span style={{color:'gray'}}>{props.data1}</span></h4>
            <h4>Go to bed : <span style={{color:'gray'}}>{props.data2}</span></h4>
            <h4>weak up : <span style={{color:'gray'}}>{props.data3}</span></h4>
            <h4>Deep sleep : <span style={{color:'gray'}}>{props.data4}</span></h4>
            <button onClick={clickhandler}>Save data</button>
        </div>
    )
}
export default Alldata;