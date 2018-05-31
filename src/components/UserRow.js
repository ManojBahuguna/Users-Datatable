import React from 'react';
import { withRouter } from 'react-router-dom';
import { TableRow } from '@material-ui/core';
import StyledCell from './StyledCell';

const style = {
  cursor: 'pointer'
};

// to prevent navigation when clicked on link
const stopEventPropagation = event => event.stopPropagation();

const UserRow = ({ user, history }) => {
  const showDetails = () => {
    history.push(`/user/${user.id}`);
  };

  return (
    <TableRow onClick={showDetails} hover style={style}>
      <StyledCell>{user.first_name}</StyledCell>
      <StyledCell>{user.last_name}</StyledCell>
      <StyledCell>{user.company_name}</StyledCell>
      <StyledCell>{user.city}</StyledCell>
      <StyledCell>{user.state}</StyledCell>
      <StyledCell>{user.zip}</StyledCell>
      <StyledCell>{user.email}</StyledCell>
      <StyledCell><a onClick={stopEventPropagation} target="_blank" href={user.web}>{user.web}</a></StyledCell>
      <StyledCell>{user.age}</StyledCell>
    </TableRow>
  );
};

export default withRouter(UserRow);