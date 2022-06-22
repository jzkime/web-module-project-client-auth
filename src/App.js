import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Client Auth Project</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/friends' >Friends</Link>
        </nav>
      </div>

      <Route exact path={['/', '/login']} component={Login}/>
      <PrivateRoute path='/friends' component={FriendsList} />
    </Router>
  );
}

export default App;
