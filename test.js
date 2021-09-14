let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"},
  {id: 4, name: "Вова"},
  {id: 2, name: "Петя"},
  {id: 1, name: "Вася"},
  {id: 3, name: "Маша"},
];

// const index = users.findIndex((el) => el.id == 2);
// const newUsers = users.splice(index, 1);


// console.log(newUsers); 

users[0].repeat += 1;
console.log(users); 
