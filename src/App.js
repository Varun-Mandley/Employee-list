import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [records,setRecords]=useState([]);
  const [data,setdata]=useState({no:''});
  const handler=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  };
  // console.log(data.no);
  const handlerAdd=()=>{
    fetch('https://randomuser.me/api/?results='+ data.no).then((response)=>response.json()).then((data)=>{
      // console.log(data.results);
      setRecords(data.results)
    })
  };
  return (
    <div>
      <h2 className='tittle'>Generate Random User Data</h2>
      <h2 className='tittle-data'><b>Number : </b><input type="text" name='no' value={data.no} onChange={handler}/></h2>
      <p><input className='btn' type="button" value="Generate"  onClick={handlerAdd}/> </p>     
      {
        records.map((row,i)=>{return(
          <div key={i} className="data">
              <img className='user-img' src={row.picture.large} alt={row.name.first} />
              <h2 className='name'>{row.name.first}&nbsp;{row.name.last} | {row.gender} </h2>
              <p><b>Email : </b>{row.email}</p>
              <p><b>Age :</b> {row.dob.age}</p>
              <p><b>Mobile No :</b> {row.cell}</p>
              <p><b>Address :</b> {row.location.street.number} {row.location.street.name}, {row.location.state}, {row.location.country}</p>

          </div> 
      )})
      }
    </div>
  )
}

export default App;