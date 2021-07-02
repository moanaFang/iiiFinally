import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Login from './components/Login'
import Account from './components/Account'
import Profile from './components/Profile'

function Member() {
  return (
    <Router>
      <>
        <Link to="/login">Login</Link>
        <Link to="/account">Account</Link>
        <Link to="/profile">Profile</Link>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </>      
    </Router>
  )
}
  
export default Member
