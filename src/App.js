import React from 'react'
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Home from './Home';
import Adddata from './Adddata';
import Edit from './Edit';
import Feedback from './Feedback';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/adddata" component={Adddata} ></Route>
          <Route path="/edit" component={Edit} ></Route>
          <Route path="/feedback" component={Feedback} ></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;