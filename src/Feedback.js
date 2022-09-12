import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import firebase from './Firebase'
import { getDatabase, push, ref } from 'firebase/database';

const Feedback = () => {
    const [record, setrecord] = useState({ nme: '', em: "", com: '' })
    const [data, setdata] = useState('')
    const h = useHistory();
    const { fn } = useParams();
    const handlerinput = (e) => {
        setrecord({ ...record, [e.target.name]: e.target.value });

    };

    const submitHandler = () => {
        if (record.nm === '') {
            setdata('Fill the form')
        }
        else if (record.em === '') {
            setdata('Fill the form')
        }
        else if (record.com === '') {
            setdata('Fill the form')
        }
        else {
            const db = getDatabase();
            const r = ref(db, "feedback");
            push(r, { Username: record.nme, Email: record.em, comment: record.com })
            h.push('/')
        }

    };

    const homeHandler = () => {
        h.push('/')
    };

    return (
        <div>
            <h2 className='fw-bold text-center fs-1 mb-5'>Feedback {fn}</h2>
            {
                <h2 className="text-center mt-2 text-danger">{data}</h2>
            }
            <input type="text" style={{ display: 'block', margin: 'auto', width: '394px', height: '50px' ,border:'1px solid #000'}} placeholder='Enter Full Name' name='nme' onChange={handlerinput} /><br />
            <input type='email' style={{ display: 'block', margin: 'auto', width: '394px', height: '50px',border:'1px solid #000' }} placeholder='Enter Email Id' name='em' onChange={handlerinput} /><br />
            <textarea style={{ display: 'block', margin: 'auto', resize: 'none',border:'1px solid #000' }} type='text' cols="51" rows="10" placeholder='Comment Here' name='com' onChange={handlerinput} required></textarea>
            <div className='d-flex justify-content-center mt-5'>
                <button style={{ fontSize: '28px', fontWeight: '300', width: '150px', margin: '0 30px', backgroundColor: '#000', color: '#fff' }} onClick={submitHandler}>Submit</button>
                <button style={{ fontSize: '28px', fontWeight: '300', width: '150px', margin: '0 30px', backgroundColor: '#000', color: '#fff' }} onClick={homeHandler}>Home</button>
            </div>

        </div>
    )
}

export default Feedback;