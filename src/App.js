import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Client Auth Project</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/friends' >Friends</Link>
          <Link to='/logout'>Logout</Link>
        </nav>
      </div>

      <Switch>
        <PrivateRoute path='/logout' component={Logout}/>
        <PrivateRoute path='/friends/add' component={AddFriend} />
        <PrivateRoute path='/friends' component={FriendsList} />
        <Route path={['/', '/login']} component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
