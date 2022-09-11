import React, {  useState } from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import firebase from './Firebase'
import { getDatabase, push, ref } from 'firebase/database';

const Feedback = () => {
  const [record, setrecord] = useState({ nm: '',em:"", com: '' })
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
      const r = ref(db, "feedback")
      push(r, { Name: record.nm, Email:record.em,comment: record.com })
      setdata('Send feedback');
      setrecord({nm:'', em:'',com:''})
    }

  };

  const homeHandler = () => {
    h.push('/')
  };

  return (
    <div>
      <h2 className='fw-bold text-center fs-1 mb-5'>Feedback {fn}</h2>
      {
        <h2 className="text-center mt-2 " style={{ color: '#00bea4' }}>{data}</h2>
      }
      <input type="text" style={{ display: 'block', margin: 'auto', width: '394px', height: '50px' }} placeholder='Enter Full Name' name='nm' onChange={handlerinput} /><br />
      <input type='email' style={{ display: 'block', margin: 'auto', width: '394px', height: '50px' }} placeholder='Enter Email Id' name='em' onChange={handlerinput} /><br />
      <textarea style={{ display: 'block', margin: 'auto' }} type='text' cols="50" rows="10" placeholder='Comment Here' name='com' onChange={handlerinput} required></textarea>
      <button style={{ display: 'block', margin: '50px auto 30px', fontSize: '28px', fontWeight: '300', width: '250px', backgroundColor: '#000', color: '#fff' }} onClick={submitHandler}>Submit</button>
      <button style={{ display: 'block', margin: 'auto', fontSize: '28px', fontWeight: '300', width: '250px', backgroundColor: '#000', color: '#fff' }} onClick={homeHandler}>Sign Out</button>
      
    </div>
  )
}

export default Feedback;