import users from "../data/userData";

export function login(username, password) {
  const user = users.find(function(user) {
    return user.username === username && user.password === password;
  });
  return user;
}

export function register(user) {
  users.push(user);
  console.log(users);
}
