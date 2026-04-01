// 1. Simple Utility App (100 lines)

// 2. Generate random ID
function generateId() {
  return Math.floor(Math.random() * 1000000);
}

// 3. Create user object
function createUser(name, age) {
  return {
    id: generateId(),
    name,
    age,
  };
}

// 4. User list
const users = [];

// 5. Add user
function addUser(name, age) {
  const user = createUser(name, age);
  users.push(user);
}

// 6. Remove user
function removeUser(id) {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
}

// 7. Find user
function findUser(id) {
  return users.find(u => u.id === id);
}

// 8. Update user
function updateUser(id, newName, newAge) {
  const user = findUser(id);
  if (user) {
    user.name = newName;
    user.age = newAge;
  }
}

// 9. Display users
function displayUsers() {
  console.log('User List:');
  users.forEach(u => {
    console.log(`ID: ${u.id}, Name: ${u.name}, Age: ${u.age}`);
  });
}

// 10. Example usage
addUser('Shipon', 22);
addUser('Rahim', 25);
addUser('Karim', 28);

// 11. Display
displayUsers();

// 12. Update first user
if (users.length > 0) {
  updateUser(users[0].id, 'Updated Name', 30);
}

// 13. Remove second user
if (users.length > 1) {
  removeUser(users[1].id);
}

// 14. Display again
displayUsers();

// 15. Extra utility: sort users
function sortUsersByAge() {
  users.sort((a, b) => a.age - b.age);
}

// 16. Sort and display
sortUsersByAge();
displayUsers();

// 17. Filter users above age
function filterUsers(minAge) {
  return users.filter(u => u.age >= minAge);
}

// 18. Show filtered
const adults = filterUsers(25);
console.log('Filtered Users:', adults);

// 19. Count users
function countUsers() {
  return users.length;
}

// 20. Log count
console.log('Total Users:', countUsers());

// 21. Clear all users
function clearUsers() {
  users.length = 0;
}

// 22. Final cleanup
clearUsers();
console.log('Cleared:', users);
