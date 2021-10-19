import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import './App.css';
import Login from './components/Login';

function setToken(userToken) {
  
}
function getToken() {

}

function App() {
  const token = getToken();

  if(!token) {
    return <Login setToken={setToken}/>;
  }

  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/preferences'>
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
