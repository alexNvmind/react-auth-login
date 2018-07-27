import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { inject } from 'mobx-react';




import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import UserPage from './components/UserPage'
import ProtectedRoute from './components/ProtectedRoute';

@inject('userStore')
class App extends Component {
  render() {
    const { userStore: { isAllowed, loginAttempt, registerUser, setToken } } = this.props;
    return (
      <div >
        <Switch>
          <Route exact path="/login" component={() => <Login setToken={setToken} loginAttempt={loginAttempt} />} />
          <Route exact path="/register" component={() => <Register setToken={setToken} registerUser={registerUser} />} />
          <ProtectedRoute permission={isAllowed} to="/login">
            <Route path="/user" component={UserPage} />
          </ProtectedRoute>
        </Switch >
      </div >
    );
  }
}

export default App;
