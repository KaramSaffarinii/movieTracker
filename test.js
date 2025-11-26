const { readDB, writeDB } = require("./utils/jsonDB.js");

const testUsers = [{ id: 1, username: "ahmad", password: "123456" }];

writeDB(testUsers);

const result = readDB();

console.log("Result:", result);
