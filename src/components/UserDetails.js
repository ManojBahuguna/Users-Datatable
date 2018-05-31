import React from 'react';
import { Table, TableRow, TableCell, TableBody, Paper, Typography } from '@material-ui/core'
import { getUserById } from '../services/Users';

const shownFields = [
  { key: 'company_name', fieldName: 'Company' },
  { key: 'city', fieldName: 'City' },
  { key: 'state', fieldName: 'State' },
  { key: 'zip', fieldName: 'Zip' },
  { key: 'email', fieldName: 'Email' },
  { key: 'web', fieldName: 'Web' },
  { key: 'age', fieldName: 'Age' }
];

const styles = {
  root: {
    maxWidth: '700px',
    margin: '3em auto',
    padding: '0.1em',
  },
  title: {
    margin: '1em',
  },
  fieldHeading: {
    fontSize: '0.9em',
  }
};

const UserDetails = ({ match }) => {
  const userId = Number(match.params.userId);
  const user = getUserById(userId);

  return (
    <Paper style={styles.root}>
      <Typography style={styles.title} variant="headline" component="h2">
        {user.first_name} {user.last_name}
      </Typography>
      <Table>
        <TableBody>
          {shownFields.map(({ key, fieldName }) =>
            <TableRow key={key}>
              <TableCell style={styles.fieldHeading} component="th" scope="row"> {fieldName} </TableCell>
              <TableCell numeric> {user[key]} </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default UserDetails;
