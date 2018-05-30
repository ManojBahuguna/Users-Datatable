export const API_URL = 'http://demo9197058.mockable.io/users';

// original data of all the users
let users = [];

// fetch users from server.
export const fetchUsers = async () => {
  await fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      // set data to users array
      users = data;
    });

  // return the users
  return users;
};


export const getUserById = userId =>
  users.find(user =>
    user.id === userId
  );