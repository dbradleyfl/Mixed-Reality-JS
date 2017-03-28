#! /usr/bin/env node
const path = require('path');
const shell = require("shelljs");

const MODULE_ROOT_PATH = path.join(__dirname, "..");
const MODULE_TEMPLATE_PATH = path.join(__dirname, "..", "template");
const USER_ARGS = process.argv.slice(2);
const USER_CWD = process.cwd();

// USER_ARGS.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

switch (USER_ARGS[0]) {
  case "new":
    if (USER_ARGS[1]) {
      let usersAppName = USER_ARGS[1];
      console.log("Creating a mixed reality js app named: ", USER_ARGS[1]);
      shell.exec("cp -r " + MODULE_TEMPLATE_PATH + " " + path.join(USER_CWD, usersAppName));
      console.log("Installing dependencies.");
      shell.cd("./" + usersAppName);
      shell.exec("npm install");
      console.log("\n\n\nSuccessfully created " + usersAppName + "! Run \"cd " + usersAppName + " && mrjs start\" to run the developmet server.");
    } else {
      console.log("Please pass an app name after new.");
    }
    break;
  case "start":
    shell.exec("npm start");
    break;
  case "package":
    shel.exec("npm run package")
    break;
  default:

}
