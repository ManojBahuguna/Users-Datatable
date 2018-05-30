import React from 'react';
import { getUserById } from '../services/Users';

const UserDetails = ({ match }) => {
  const userId = Number(match.params.userId);
  const user = getUserById(userId);

  return (
    <div className="UserDetails">
      <h2>User Details : userId</h2>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.company_name}</p>
      <p>{user.city}</p>
      <p>{user.state}</p>
      <p>{user.zip}</p>
      <p>{user.email}</p>
      <p>{user.web}</p>
      <p>{user.age}</p>
    </div>
  );
};

export default UserDetails;
