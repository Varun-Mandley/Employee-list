import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import './All.css'
const Update = () => {
const [data,setdata]=useState({id:'',fn:'',a:'',jt:'',cry:''})
const [s,sets]=useState('');
const[r,setr]=useState('');

const handler=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
 };
const handlerUpdate=(e)=>{
    if((data.id) ===""){
        sets('Please Enter Your Data')
    }
    else{
        axios.put(`https://630dda53b37c364eb70cfed5.mockapi.io/lists/${data.id}`,{
        firstname:data.fn,
        lastname: data.ln,
        age:      data.a,
        jobtype:  data.jt,
        country:  data.cry
    })
    .then((res)=>{
        console.log(res.data);

    })
    .catch((err)=>{console.log(err);})
    setdata({id:'',fn:'',a:'',jt:'',cry:''})
    sets('Successfully Updated Data');
    setr('View Your Data on the Show Page')

    }
};
  return (
    <>
    <h2 style={{textAlign: 'center',fontSize: '34px',color: 'white'}}>Required ID which one you Updated.</h2>
    <div style={{display:"flex",justifyContent: 'center',marginTop:'30px'}}>
        <table>
            <thead>
                <tr>
                    <td className='update'>Id </td>
                    <td><input className="input" type="text" name="id" value={data.id} onChange={handler} placeholder='Enter Id' required /></td>
                </tr>
                <tr>
                    <td className='update'>Name </td>
                    <td><input className="input" type="text" name="fn" value={data.fn} onChange={handler} placeholder='Enter Name' /></td>
                </tr>
                <tr>
                    <td className='update'>Age  </td>
                    <td><input className="input" type="text" name="a" value={data.a} onChange={handler} placeholder='Enter Age' /></td>
                </tr>
                <tr>
                    <td className='update'>Job Type  </td>
                    <td><input className="input" type="text" name="jt" value={data.jt} onChange={handler} placeholder='Enter Jobtype'/></td>
                </tr>
                <tr>
                    <td className='update'>Address  </td>
                    <td><input className="input" type="text" name="cry" value={data.cry} onChange={handler} placeholder='Enter Address'/></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="input"><input className="btn btn-update" type="button" value="Update Profile" onClick={handlerUpdate} /></td>
                </tr>
            </thead>
        </table>
    </div>
    {
        <>
        <h2 className='message' >{s}</h2>
        <h2 className='message' >{r}</h2>
        </>
    }
    </>
  )
}

export default Update;