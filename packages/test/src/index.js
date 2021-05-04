import * as fs from "fs";

if (!fs.existsSync("/hello")) {
  console.log("/hello doesn't exist!");
}
