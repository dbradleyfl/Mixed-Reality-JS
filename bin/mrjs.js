#! /usr/bin/env node
var shell = require("shelljs");

let args = process.argv.slice(2);

args.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

shell.exec("echo shell.exec works");
