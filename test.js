const { signup, login } = require("./services/authServices");

signup("ahmad", "ahmad@example.com", "123456", "user");

const result = login("ahmad@example.com", "123456");
console.log(result);
