import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import "./App.css"
const App = () => {
    const [data , setdata]=useState({city:''});
    const [records,setrecords]=useState([])
    const handler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    };
    const handlerAdd=()=>{
        // console.log("DeprecationWarning");
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=795a2bf2f4aab15cd827770a331c97ec&units=metric`)
        .then((response)=>{
           if(data.city===''){
            console.log('Enter a city');
           }
           else{
            console.log(response.data);
            const rcds = [...records];
            rcds.push(response.data);
            setrecords(rcds);
            setdata({city:""});
           }
        })
        
    };
    const handlerdel=(i)=>{
        const rcds = [...records];
        rcds.splice(i, 1);
        setrecords(rcds);
    };
  return (
      <div>
        <h2 className='header'>Weather Forecast</h2>
        <input className='search-input' type="text" name='city' placeholder="Enter City Name" value={data.city} onChange={handler} /> <br />
        <input className='btn' type="button" value="Click to Add" onClick={handlerAdd}/>     <br /><br />
        {
            records.map((row,i)=>{return(
                <div key={i} className="box">
                    <img className='city-des' src={"http://openweathermap.org/img/wn/"+row.weather[0].icon+"@2x.png"} alt="img" />
                    <h2 className='city-name'>{row.name}</h2>
                    <p className='detail'>Country : {row.sys.country}</p>
                    <p className='detail'>Temperature : {row.main.temp} °C</p>
                    <p className='detail'>Humidity : {row.main.humidity} %</p>
                    <p className='detail'>Wind Speed : {row.wind.speed} m/s</p>
                    <p className='detail'>Description : {row.weather[0].main}</p>
                    <input className='box-btn' type="button" value="X" onClick={()=>handlerdel(i)}/>
                </div>
            )})
        }

    </div>
  )
}

export default App;