import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersTable from './UsersTable';
import UserDetails from './UserDetails';

const App = () => (
  <div className="UsersDataApp">
    <h1>UsersData - Data Peace Challenge</h1>
    <Switch>
      <Route exact path='/' component={UsersTable} />
      <Route path='/user/:userId' component={UserDetails} />
    </Switch>
  </div>
);

export default App;