import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Feedback from './Feedback';
const App = () => {
  return (
    <div>
        <Router>
            <Switch>
                <Route path="/" component={Login} exact></Route>
                <Route path="/feedback/:fn" component={Feedback} ></Route>
            </Switch>
        </Router>
        
    </div>
  )
}

export default App;