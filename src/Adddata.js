import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import firebase from './Firebase';
import {getDatabase,ref,push} from 'firebase/database';

const Adddata = () => {
    const h = useHistory();
    const [data, setdata] = useState({ em: '', nm: '', age: '', job: '', add: '' })
    const [empty,setempty] = useState('')
    const Inputhandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const Savedatahandler = () => {
        if(data.em===""){
            setempty('Fill data');
        }
        else{
            const db =getDatabase();
            const r = ref(db,"Employeedata")
            push(r,{EmployeeId:data.em,Name:data.nm,Age:data.age,JobType:data.job,Address:data.add});
            h.push('/')
        }
    };

    const Homehandler = () => {
        h.push('/')
    };
    return (
        <>
            <h2 className='text-center fw-bolder fs-1 bg-light p-4'>Insert Data</h2>
            <div className="container"></div>
            {
                <h2 className='text-center text-danger'>{empty}</h2>
            }
            <table className='mt-5 d-flex justify-content-center'>
                <thead>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-4 " id="addon-wrapping">Em.Id </span>
                            </div>
                        </td>
                        <td>
                            <input type="text" className='py-1' style={{ width: '250px', maxWidth: '100%' }} placeholder="Enter Employee Id" aria-label="Username" aria-describedby="addon-wrapping" name="em" onChange={Inputhandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-4 " id="addon-wrapping">Name</span>
                            </div>
                        </td>
                        <td>
                            <input type="text" className='py-1' style={{ width: '250px', maxWidth: '100%' }} placeholder="Enter Name" aria-label="Username" aria-describedby="addon-wrapping" name="nm" onChange={Inputhandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-4 px-4 " id="addon-wrapping">Age</span>
                            </div>
                        </td>
                        <td>
                            <input type="number" className='py-1' style={{ width: '250px', maxWidth: '100%' }} placeholder="Enter Age" aria-label="Username" aria-describedby="addon-wrapping" name="age" onChange={Inputhandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-1  " id="addon-wrapping">Job Type</span>
                            </div>
                        </td>
                        <td>
                            <input type="text" className='py-1' style={{ width: '250px', maxWidth: '100%' }} placeholder="Enter JobType" aria-label="Username" aria-describedby="addon-wrapping" name="job" onChange={Inputhandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-2" id="addon-wrapping">Address</span>
                            </div>
                        </td>
                        <td>
                            <input type="text" className='py-1' style={{ width: '250px', maxWidth: '100%' }} placeholder="Enter Address" aria-label="Address" aria-describedby="addon-wrapping" name="add" onChange={Inputhandler} />
                        </td>
                    </tr>
                </thead>
            </table>
            <div className='d-flex justify-content-center mt-4' >
                <button type="button" className="btn btn-success  me-5 fs-3" onClick={Savedatahandler}>Success</button>
                <button type="button" className="btn btn-secondary fs-3" onClick={Homehandler}>Home</button>
            </div>
        </>

    )
}

export default Adddata;