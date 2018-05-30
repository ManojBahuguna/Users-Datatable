export const API_URL = 'http://demo9197058.mockable.io/users';

// original Data of all the users
let users = [];

// fetch users from server if not fetched yet and return users.
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
