import React from 'react'
import { HiPlus } from "react-icons/hi";
import { MdOutlineFeedback } from "react-icons/md";
import { useHistory } from 'react-router-dom';
import firebase from './Firebase';
import { getDatabase, ref, onValue, remove, child } from 'firebase/database';
import { useState } from 'react';
import { useEffect } from 'react';
// import Edit from './Edit';
const Home = () => {
    const [record, setrecord] = useState([]);

    const h = useHistory();
    const Addhandler = () => {
        h.push('/Adddata')
    };

    useEffect(() => {
        const db = getDatabase();
        const r = ref(db, "Employeedata")
        onValue(r, sanpshot => {
            const data = sanpshot.val();
            const rcds = [...record]
            for (let v in data) {
                // console.log(data[v]);
                rcds.push({ v, ...data[v] })
            }
            setrecord(rcds);
        })
    }, [])

    const Deletehandler = (v) => {
        const db = getDatabase();
        const r = ref(db, "Employeedata");
        remove(child(r, v));
    };

    const Edithandler = (row) => {
        // console.log(row);
        // console.log(row.v);
        // console.log(row.EmployeeId);
        // console.log(row.Name);
        // console.log(row.Age);
        // console.log(row.JobType);
        // console.log(row.Address);
        // console.log('-------');
        sessionStorage.setItem('id', row.v);
        sessionStorage.setItem('Employee', row.EmployeeId);
        sessionStorage.setItem('name', row.Name);
        sessionStorage.setItem('age', row.Age);
        sessionStorage.setItem('job', row.JobType);
        sessionStorage.setItem('add', row.Address);

        h.push('/Edit')
    };

    const Feedbackhandler = () => {
        h.push('/Feedback')

    }

    return (
        <div>
            <h2 className='text-center fw-bolder fs-1 bg-light p-4'>Employee Data</h2>
            <div className="wrap-1 mt-5">
                <div className="container">
                    <button type="button" className="btn btn-info me-5" onClick={Addhandler}> <HiPlus /> New Data</button>
                    <button type="button" className="btn btn-info " onClick={Feedbackhandler}> <MdOutlineFeedback /> FeedBack</button>
                    <div className="row">
                        <table className="table table-hover mt-3">
                            <thead>
                                <tr className='bg-black fw-bold fs-4 color-white text-white'>
                                    <th>Em.Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Position</th>
                                    <th>Address</th>
                                    <th>Functionality</th>
                                </tr>
                                {
                                    record.map((row, i) => {
                                        return (

                                            <tr key={i}>
                                                <td className='align-middle'>{row.EmployeeId}</td>
                                                <td className='align-middle'>{row.Name}</td>
                                                <td className='align-middle'>{row.Age}</td>
                                                <td className='align-middle'>{row.JobType}</td>
                                                <td className='align-middle'>{row.Address}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary me-3 px-4 my-1" onClick={() => Edithandler(row)}>Edit</button>
                                                    <button type="button" className="btn btn-danger px-3 my-1" onClick={() => Deletehandler(row.v)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;