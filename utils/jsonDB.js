const fs = require("fs");
const path = require("path");

const json_path = path.join(__dirname, "..", "data", "users.json");

function jsonRead() {
  if (!fs.existsSync(json_path)) return [];

  const raw = fs.readFileSync(json_path, "utf8");

  try {
    return JSON.parse(raw || "[]");
  } catch (e) {
    console.error("no data");
  }
}

function jsonWrite(data) {
  fs.mkdirSync(path.dirname(json_path), { recursive: true });
  fs.writeFileSync(json_path, JSON.stringify(data, null, 2), "utf8");
}

module.exports = {
  readDB: jsonRead,
  writeDB: jsonWrite,
};
