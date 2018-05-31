import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, TableHead, TableRow, TableBody, TextField, Paper } from '@material-ui/core';
import { getAllUsers, getFilteredUsers } from '../services/Users';
import UserRow from './UserRow';
import StyledCell from './StyledCell';

const styles = {
  root: {
    padding: '1em',
    overflow: 'auto'
  },
  searchInput: {
    margin: '1em 1em 2em 1em'
  }
};

class UsersTable extends Component {
  state = {
    users: getAllUsers(),
    filterValue: '',

    // columns
    colFirstName: { key: 'first_name', name: 'First Name', sortDirection: null },
    colLastName: { key: 'last_name', name: 'Last Name', sortDirection: null },
    colCompany: { key: 'company_name', name: 'Company', sortDirection: null },
    colCity: { key: 'city', name: 'City', sortDirection: null },
    colState: { key: 'state', name: 'State', sortDirection: null },
    colZip: { key: 'zip', name: 'Zip', sortDirection: null },
    colEmail: { key: 'email', name: 'Email', sortDirection: null },
    colWeb: { key: 'web', name: 'Web', sortDirection: null },
    colAge: { key: 'age', name: 'Age', sortDirection: null }
  }

  handleFilterValueChange = (e) => {
    const filterValue = e.target.value;

    // return if there's only whitespace
    if (
      !this.state.filterValue &&
      !filterValue.trim()
    ) return;

    this.setState({
      filterValue,
      users: getFilteredUsers(filterValue)
    });
  };


  render() {
    const { users, filterValue, colFirstName, colLastName, colCompany, colCity, colState, colZip, colEmail, colWeb, colAge } = this.state;

    return (
      <Paper style={styles.root}>
        <TextField
          label="Search by first name"
          value={filterValue}
          onChange={this.handleFilterValueChange}
          style={styles.searchInput}
        />

        <Table>
          <TableHead>
            <TableRow>
              <StyledCell>{colFirstName.name}</StyledCell>
              <StyledCell>{colLastName.name}</StyledCell>
              <StyledCell>{colCompany.name}</StyledCell>
              <StyledCell>{colCity.name}</StyledCell>
              <StyledCell>{colState.name}</StyledCell>
              <StyledCell>{colZip.name}</StyledCell>
              <StyledCell>{colEmail.name}</StyledCell>
              <StyledCell>{colWeb.name}</StyledCell>
              <StyledCell>{colAge.name}</StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => <UserRow key={user.id} user={user} />)}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withRouter(UsersTable);
