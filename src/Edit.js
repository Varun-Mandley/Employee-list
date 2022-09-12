import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import firebase from './Firebase';
import { getDatabase, ref, update, child } from 'firebase/database';
import { useEffect } from 'react';
const Edit = () => {
    const h = useHistory();
    const [data, setdata] = useState({ em: '', nm: '', age: '', job: '', add: '' })
    const [storage, setstorage] = useState({ id: '', employee: '', name: '', age: '', job: '', add: '' });
    const [show, setshow] = useState('');

    const id = sessionStorage.getItem("id");
    const emp = sessionStorage.getItem("Employee");
    const nm = sessionStorage.getItem("name");
    const ag = sessionStorage.getItem("age");
    const job = sessionStorage.getItem("job");
    const add = sessionStorage.getItem("add");


    useEffect(() => {
        setstorage({ id: id, employee: emp, name: nm, age: ag, job: job, add: add })
        setdata({ em: emp, nm: nm, age: ag, job: job, add: add })
    }, [])

    // setTimeout(() => {
    //     sessionStorage.removeItem("id");
    //     sessionStorage.removeItem("Employee");
    //     sessionStorage.removeItem("name");
    //     sessionStorage.removeItem("age");
    //     sessionStorage.removeItem("job");
    //     sessionStorage.removeItem("add");
    //     console.log("hello world");
    // }, 9000)

    // console.log(storage.employee);
    // console.log(storage.name);
    // console.log(storage.age);
    // console.log(storage.job);
    // console.log(storage.add);




    const Inputhandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };

    const Edithandler = () => {
        if (data.em === '') {
            setshow('Fill the form')
        }
        else if (data.nm === '') {
            setshow('Fill the form')
        }
        else if (data.age === '') {
            setshow('Fill the form')
        }
        else if (data.job === '') {
            setshow('Fill the form')
        }
        else if (data.add === '') {
            setshow('Fill the form')
        }
        else {
            const db = getDatabase();
            const r = ref(db, "Employeedata");
            update(child(r, storage.id), { EmployeeId: data.em, Name: data.nm, Age: data.age, JobType: data.job, Address: data.add });
            // setdata({ em: '', nm: '', age: '', job: '', add: '' })
            h.push('/')
        }

    };

    const Homehandler = () => {
        h.push('/')
    };
    return (
        <>
            <h2 className='text-center fw-bolder fs-1 bg-light p-4'>Update Data</h2>
            <div className="container"></div>
            {
                <h2 className="text-center mt-2 text-danger">{show}</h2>
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
                            <input type="text" className='py-1' style={{ width: '250px', maxWidth: '100%', border: '1px solid' }} placeholder="Enter Employee Id" aria-label="Username" aria-describedby="addon-wrapping" name="em" value={data.em} onChange={Inputhandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-4 " id="addon-wrapping">Name</span>
                            </div>
                        </td>
                        <td>
                            <input type="text" className='py-1' style={{ width: '250px', maxWidth: '100%', border: '1px solid' }} placeholder="Enter Name" aria-label="Username" aria-describedby="addon-wrapping" name="nm" value={data.nm} onChange={Inputhandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-4 px-4 " id="addon-wrapping">Age</span>
                            </div>
                        </td>
                        <td>
                            <input type="number" className='py-1' style={{ width: '250px', maxWidth: '100%', border: '1px solid' }} placeholder="Enter Age" aria-label="Username" aria-describedby="addon-wrapping" name="age" value={data.age} onChange={Inputhandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-1  " id="addon-wrapping">Job Type</span>
                            </div>
                        </td>
                        <td>
                            <input type="text" className='py-1' style={{ width: '250px', maxWidth: '100%', border: '1px solid' }} placeholder="Enter JobType" aria-label="Username" aria-describedby="addon-wrapping" name="job" value={data.job} onChange={Inputhandler} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="input-group flex-nowrap justify-content-center ">
                                <span className="input-group-text pe-2" id="addon-wrapping">Address</span>
                            </div>
                        </td>
                        <td>
                            <input type="text" className='py-1' style={{ width: '250px', maxWidth: '100%', border: '1px solid' }} placeholder="Enter Address" aria-label="Address" aria-describedby="addon-wrapping" name="add" value={data.add} onChange={Inputhandler} />
                        </td>
                    </tr>
                </thead>
            </table>
            <div className='d-flex justify-content-center mt-4' >
                <button type="button" className="btn btn-success  me-5 fs-3" onClick={Edithandler}>Update</button>
                <button type="button" className="btn btn-secondary fs-3" onClick={Homehandler}>Home</button>
            </div>
        </>

    )
}

export default Edit;