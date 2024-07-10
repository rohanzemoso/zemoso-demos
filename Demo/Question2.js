const users = [
  { user: 'user1', designation: 'IT' },
  { user: 'user2', designation: 'CSE' },
];

const groupUsers = (usersArray) => {
  return usersArray.reduce((group, user) => {
    const { designation } = user;
    group[designation] ??= [];
    group[designation].push(user);
    return group;
  }, {});
};

const group = groupUsers(users);

console.log(group);
