import React from 'react';

const UserDetails = ({ match }) => (
  <div className="UserDetails">
    User Details : {match.params.userId}
  </div>
);

export default UserDetails;
