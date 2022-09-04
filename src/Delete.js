import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
const [data,setdata]=useState({id:''})
const [s,sets]=useState('')
const handler=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
};
const handlerDelete=()=>{
    if((data.id) ===""){
        sets("Please Enter Id Number")
    }
    else{
    axios.delete(`https://630dda53b37c364eb70cfed5.mockapi.io/lists/${data.id}`)
    setdata({id:''})
    sets("Successfully Deleted Data")
    }
}
  return (
    <div>
        <h2 style={{color: 'white',fontSize: '32px',textAlign: 'center'}}>Enter the ID number which one you deleted.</h2>
        <div style={{display:"flex",justifyContent: 'center',marginTop:'30px'}}>
            <table>
                <thead>
                    <tr>
                        <td className='update'>Id : </td>
                        <td><input className="input" type="text" name="id" value={data.id} onChange={handler} placeholder='Enter Id number' required /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="input"><input className="btn btn-update" type="button" value="Delete" onClick={handlerDelete} /></td>
                    </tr>
                </thead>
            </table>
        </div> 
        {
            <h2 className='message' >{s}</h2>
        }
    </div>
  )
}

export default Delete;