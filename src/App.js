import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import SelectedFriend from './components/SelectedFriend'

function App() {
  const [ loggedIn, setIsLoggedIn ] = useState(false)

useEffect(() => {
    if(!localStorage.getItem("token")) {
      setIsLoggedIn(false)
    } else {
      setIsLoggedIn(true)
    }
}, [loggedIn])

  return (
    <Router>
      <div className="App">
        <h1>Client Auth Project</h1>
        <nav>
          {
            loggedIn ?
            <>
              <Link to='/friends'>Friends</Link>
              <Link to='/logout'>Logout</Link>
            </>
            :
            <h4>please login</h4>
          }
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
