import React from 'react'
import axios from 'axios';
import './All.css'
import { useState } from 'react';
const Show = () => {
    const [r,setr]=useState([])
    const handler= () => {
        axios.get('https://630dda53b37c364eb70cfed5.mockapi.io/lists')
        .then((response) =>{
            // console.log(response.data);
            setr(response.data);
        })
        .catch((error) =>{
            console.log(error);
        })
    };
  return (
    <div>
        <h2 style={{textAlign: 'center',fontSize: '34px',color: 'white'}}>Press the Click Button to Read Data.</h2>
         <input className='btn' type="button" value="Click To Show" onClick={handler}/>
         {
            r.map((row,i)=>{return(
                <div key={i} className='box'>
                    <h1 className="detail">Id: {row.id}</h1>
                    <img className='img' src={row.avatar} alt="" />
                    <h2 className="detail">Name :  {row.firstname}</h2>
                    <h3 className="detail">Age : {row.age}</h3>
                    <h3 className="detail">Job type : {row.jobtype}</h3>
                    <h3 className="detail">Address : {row.country}</h3>
                </div>
            )})
         }
    </div>
  )
}

export default Show;