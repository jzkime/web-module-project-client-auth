import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import SelectedFriend from './components/SelectedFriend'

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Client Auth Project</h1>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
          <Link to='/logout'>Logout</Link>
        </nav>
      </div>

      <Switch>
        <PrivateRoute path='/logout' component={Logout}/>
        <PrivateRoute exact path='/friends/add' component={AddFriend} />
        <PrivateRoute exact path='/friends/:friendId' component={SelectedFriend} />
        <PrivateRoute path='/friends' component={FriendsList} />
        <Route path={['/', '/login']} component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
