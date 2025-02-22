const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 19 },
];

const filteredUsers = users.filter(user => user.age > 25);

console.log(filteredUsers);
