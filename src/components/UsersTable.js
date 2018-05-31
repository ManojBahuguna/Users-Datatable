import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Table, TableHead, TableRow, TableBody, TextField, Paper, TableSortLabel } from '@material-ui/core';
import { getAllUsers, getFilteredUsers, getSortedUsers } from '../services/Users';
import UserRow from './UserRow';
import StyledCell from './StyledCell';

const styles = {
  root: {
    padding: '1em'
  },
  table: {
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
    sortBy: '',
    sortInDescending: false
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

  handleSorting = sortBy => {
    const state = {};

    // if clicked the already sorted column, reverse the sorting order
    if (sortBy === this.state.sortBy)
      state.sortInDescending = !this.state.sortInDescending;
    else {
      // else set sortBy and reset sortInDescending to false
      state.sortBy = sortBy;
      state.sortInDescending = false;
    }

    state.users = getSortedUsers(sortBy, state.sortInDescending, this.state.users);

    this.setState(state);
  };


  render() {
    const { users, filterValue, sortBy, sortInDescending } = this.state;

    return (
      <Paper style={styles.root}>
        <TextField
          label="Search by first name"
          value={filterValue}
          onChange={this.handleFilterValueChange}
          style={styles.searchInput}
        />

        <div style={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledCell onClick={() => { this.handleSorting('first_name') }} > <TableSortLabel active={sortBy === 'first_name'} direction={sortInDescending ? 'desc' : 'asc'}>First Name</TableSortLabel> </StyledCell>
                <StyledCell onClick={() => { this.handleSorting('last_name') }} > <TableSortLabel active={sortBy === 'last_name'} direction={sortInDescending ? 'desc' : 'asc'}>Last Name</TableSortLabel> </StyledCell>
                <StyledCell onClick={() => { this.handleSorting('company_name') }} > <TableSortLabel active={sortBy === 'company_name'} direction={sortInDescending ? 'desc' : 'asc'}>Company</TableSortLabel> </StyledCell>
                <StyledCell onClick={() => { this.handleSorting('city') }} > <TableSortLabel active={sortBy === 'city'} direction={sortInDescending ? 'desc' : 'asc'}>City</TableSortLabel> </StyledCell>
                <StyledCell onClick={() => { this.handleSorting('state') }} > <TableSortLabel active={sortBy === 'state'} direction={sortInDescending ? 'desc' : 'asc'}>State</TableSortLabel> </StyledCell>
                <StyledCell onClick={() => { this.handleSorting('zip') }} > <TableSortLabel active={sortBy === 'zip'} direction={sortInDescending ? 'desc' : 'asc'}>Zip</TableSortLabel> </StyledCell>
                <StyledCell onClick={() => { this.handleSorting('email') }} > <TableSortLabel active={sortBy === 'email'} direction={sortInDescending ? 'desc' : 'asc'}>Email</TableSortLabel> </StyledCell>
                <StyledCell onClick={() => { this.handleSorting('web') }} > <TableSortLabel active={sortBy === 'web'} direction={sortInDescending ? 'desc' : 'asc'}>Web</TableSortLabel> </StyledCell>
                <StyledCell onClick={() => { this.handleSorting('age') }} > <TableSortLabel active={sortBy === 'age'} direction={sortInDescending ? 'desc' : 'asc'}>Age</TableSortLabel> </StyledCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => <UserRow key={user.id} user={user} />)}
            </TableBody>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withRouter(UsersTable);
