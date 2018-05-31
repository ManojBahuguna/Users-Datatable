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

export const getSortedUsers = (sortBy, sortInDescendingOrder, usersData = users) => {
  if (!usersData.length) return [];
  if (!sortBy) return usersData;

  const isString = typeof usersData[0][sortBy] === 'string';

  return usersData.sort((user, nextUser) => {

    // if value is string then convert to lowercase before comparing

    const diff =
      isString
        ? user[sortBy]
          .toLowerCase()
          .localeCompare(
            nextUser[sortBy]
              .toLowerCase()
          )
        : user[sortBy] - nextUser[sortBy];

    // return according to sort direction
    return diff * (sortInDescendingOrder === true ? -1 : 1)
  });
};

export const getUserById = userId =>
  users.find(user =>
    user.id === userId
  );