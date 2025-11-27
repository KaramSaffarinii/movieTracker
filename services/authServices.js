const crypto = require("crypto");
const { readDB, writeDB } = require("../utils/jsonDB");

function hashPassword(password, salt = null) {
  salt = salt || crypto.randomBytes(16).toString("hex");
  const derived = crypto.scryptSync(password, salt, 64).toString("hex");
  return { salt, hash: derived };
}

function signUp(username, email, password, role = "user") {
  const users = readDB();
  const exists = users.some((u) => u.email === email);

  if (exists) {
    console.log("email is already taken");
    return null;
  }
  const { salt, hash } = hashPassword(password);

  const newUser = {
    id: Date.now(),
    username,
    salt,
    hash,
    email,
    role,
  };

  users.push(newUser);
  writeDB(users);
  console.log("account created successfully");
  return newUser;
}

function login(email, password) {
  const users = readDB();
  const user = users.find((u) => u.email === email);

  if (!user) {
    console.log("user not found");
    return null;
  }
  const hashattempt = crypto
    .scryptSync(password, user.salt, 64)
    .toString("hex");

  if (hashattempt !== user.hash) {
    console.log("Password is wrong");
    return null;
  }

  console.log("login successfull");
  return user;
}

module.exports = {
  signup: signUp,
  login: login,
};
