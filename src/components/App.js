import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersTable from './UsersTable';
import UserDetails from './UserDetails';
import { fetchUsers } from '../services/Users';
import Header from './Header';
import { CircularProgress, Typography } from '@material-ui/core';

const styles = {
  loader: {
    margin: '3em auto',
    display: 'block'
  },
  error: {
    textAlign: 'center',
    color: '#D50000',
    margin: '2em'
  }
};

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
              <Typography style={styles.error} variant="headline"> Failed to fetch data! </Typography> :
              <CircularProgress size={70} style={styles.loader} />
        }
      </div>
    );
  };
}
export default App;