import React from 'react'
import Show from './Show';
import Post from './Post';
import Update from './Update';
import Delete from './Delete';
import {Link,BrowserRouter as Router,Switch,Route} from "react-router-dom"
const App = () => {
  return (
    <div >
        <Router style={{}}>
        <h1 className='header'>CRUD Application</h1> <br /><hr /><br />
        <div style={{display: 'flex',justifyContent:"space-around" ,alignItems: 'center'}}>
        <Link className='nav' to='/'>Show</Link>    
        <Link className='nav' to='/post'>Post</Link>    
        <Link className='nav' to='/update'>Update</Link>
        <Link className='nav' to='/delete'>Delete</Link>
        </div><br /><hr />
        <Switch>
            <Route path='/' component={Show} exact></Route>
            <Route path='/post' component={Post} exact></Route>
            <Route path='/update' component={Update}></Route>
            <Route path='/delete' component={Delete}></Route>
        </Switch>
        </Router><br /> 
    </div>
  )
}

export default App;