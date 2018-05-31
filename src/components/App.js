import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersTable from './UsersTable';
import UserDetails from './UserDetails';
import { fetchUsers } from '../services/Users';
import Header from './Header';

class App extends Component {

  state = {
    isDataFetched: false,
    dataFetchingFailed: false
  };

  componentDidMount() {
    fetchUsers().then(() => {
      this.setState({
        isDataFetched: true
      });
    }).catch((err) => {
      console.error('Error Fetching Data', err);
      this.setState({
        dataFetchingFailed: true
      })
    });
  }

  render() {
    return (
      <div className="UsersDataApp">
        <Header />
        {
          this.state.isDataFetched ?
            <Switch>
              <Route exact path='/' component={UsersTable} />
              <Route path='/user/:userId' component={UserDetails} />
            </Switch> :
            this.state.dataFetchingFailed ?
              'There was error fetching data' :
              'Loading...'
        }
      </div>
    );
  };
}
export default App;