import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Table, TableHead, TableCell, TableRow, TableBody, TextField, Paper } from '@material-ui/core';
import { getAllUsers, getSortedUsers, getFilteredUsers } from '../services/Users';

const styles = {
  root: {
    padding: '1em',
    margin: '1em'
  },
  searchInput: {
    margin: '1em 1em 2em 1em'
  }
};

class UsersTable extends Component {
  state = {
    users: getAllUsers(),
    filterValue: ''
  }

  handleFilterValueChange = (e) => {
    const filterValue = e.target.value;
    this.setState({
      filterValue
    });

    if (filterValue.trim().length > 0)
      this.setState({
        users: getFilteredUsers(filterValue)
      });
  };

  render() {
    return (
      <Paper style={styles.root}>
        <TextField
          label="Search by first name"
          value={this.state.filterValue}
          onChange={this.handleFilterValueChange}
          style={styles.searchInput}
        />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default UsersTable;
