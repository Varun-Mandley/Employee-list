import axios from 'axios';
import { child, getDatabase, onValue, push, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import './Login.css'

const Weather = (props) => {
    let emp = props.data;
    emp=emp.replace('@', 'a');
    emp=emp.replace('.', 'dot');


    const [data, setdata] = useState({ city: '' });
    const [records, setrecords] = useState([])

     
    const handlerinput = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const handlerAdd = () => {
        // console.log("DeprecationWarning");
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=bd66034e0ba1210ef5b6b72017461415&units=metric`)
            .then((response) => {
                // console.log(response.data);
                const data=response.data;
                const name= data.name;
                const country=data.sys.country;
                const temp =  data.main.temp;
                const humidity = data.main.humidity;
                const windspeed =data.wind.speed;
                const des =data.weather[0].main;
                const icon =data.weather[0].icon;

                const db = getDatabase();
                const r =ref (db,emp)
                push (r,{name:name,country:country,temprature:temp,humidity:humidity,windspeed:windspeed,description:des,icon:icon})
                setdata({ city: "" });
            })
    };

   

    useEffect(()=>{
        const db = getDatabase();
        const r =ref (db,emp)
        onValue(r, snapshot=>{
            const data=snapshot.val();
            const rcds= [...records];
            for(let v in data) {
                rcds.push({v,...data[v]});
            }
            setrecords(rcds);
        })
    },[])


    const handlerdel = (v) => {
        const db = getDatabase();
        const r =ref (db,emp)
        remove(child(r,v))

    };

    return (
        <div>
            <input className='search-input' type="text" name='city' placeholder="Enter City Name" value={data.city} onChange={handlerinput} /> <br />
            <input className='submit-btn' type="button" value="Submit" onClick={handlerAdd} />     <br /><br />
            {
                records.map((row, i) => {
                    return (
                        <div key={i} className="box">
                            <img className='city-des' src={"http://openweathermap.org/img/wn/" + row.icon + "@2x.png"} alt="img" />
                            <h2 className='city-name'>{row.name}</h2>
                            <p className='detail'>Country : {row.country}</p>
                            <p className='detail'>Temperature : {row.temprature} °C</p>
                            <p className='detail'>Humidity : {row.humidity} %</p>
                            <p className='detail'>Wind Speed : {row.windspeed} m/s</p>
                            <p className='detail'>Description : {row.description}</p>
                            <input className='box-btn' type="button" value="X" onClick={() => handlerdel(row.v)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Weather;