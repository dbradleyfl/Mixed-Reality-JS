#! /usr/bin/env node
var shell = require("shelljs");

let args = process.argv.slice(2);

// args.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

switch (args[0]) {
  case "new":
    if (args[1]) {
      console.log("Creating a mixed reality js app named: ", args[1]);
    } else {
      console.log("Please pass an app name after new.");
    }
    break;
  case "start":
    console.log("Run mrjs app development server.");
    break;
  case "package":
    console.log("Package mrjs app as Universal Windows Platform application.")
    break;
  default:

}
