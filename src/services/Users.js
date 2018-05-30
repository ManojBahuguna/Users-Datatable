export const API_URL = 'http://demo9197058.mockable.io/users';

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

export const getAllUsers = () => users;

export const getFilteredUsers = (filterValue, filterBy = 'first_name', usersData = users) =>
  usersData.filter(user =>
    user[filterBy].toLowerCase().startsWith(filterValue.toLowerCase())
  );

export const getSortedUsers = (sortBy, sortInDescendingOrder, usersData = users) =>
  usersData.sort((user, nextUser) =>
    String(user[sortBy])
      .toLowerCase()
      .localeCompare(
        nextUser[sortBy].toLowerCase()
      ) * (sortInDescendingOrder === true ? -1 : 1)
  );

export const getUserById = userId =>
  users.find(user =>
    user.id === userId
  );