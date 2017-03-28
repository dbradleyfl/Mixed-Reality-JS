#! /usr/bin/env node
const path = require('path');
var fs = require('fs');
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
      console.log("Creating a Mixed Reality JS app named: ", USER_ARGS[1]);
      shell.exec("cp -r " + MODULE_TEMPLATE_PATH + " " + path.join(USER_CWD, usersAppName));
      console.log("Installing dependencies.");
      shell.cd("./" + usersAppName);
      shell.exec("npm install");
      console.log("\n\n\nSuccessfully created " + usersAppName + "! \n\nRun \"cd " + usersAppName + " && mrjs start\" to run the developmet server.");
    } else {
      console.log("Please pass an app name after new.");
    }
    break;
  case "start":
    shell.exec("npm start");
    break;
  case "package":
    try {
      shell.exec("npm run build");
    } catch (e) {
      console.log(e);
      console.log("Failed when trying to build js application (didn't get to HoloJS template app).");
    }

    if (!shell.which('git')) {
      shell.echo('Sorry, this script requires git');
      shell.exit(1);
    }

    try {
      fs.stat("./release", function (err, stats) {
        if (err) {
          console.log('Creating release folder...');
          shell.mkdir("./release");
        }
        shell.cd("./release");
        checkForHoloJS();
      });
    } catch (e) {
        console.log(e);
        console.log("Failed when trying to create and navigate into release folder.");
    }

    function checkForHoloJS () {
      try {
        fs.stat("./HoloJS", function (err, stats) {
          if (err) {
            console.log("\n\nLooks like this is the first time this application will be packaged. The first run of \"mrjs package\" can take quite a while because we have to clone HoloJS and all its submodules. HoloJS is a rather large file.\n\n");
            console.log("Cloning HoloJS template app...");
            shell.exec("git clone --recursive https://github.com/dbradleyfl/HoloJS.git");
          }
          copyBuildIntoTemplateApp();
        });
      } catch (e) {
          console.log(e)
          console.log("Failed when trying to recursivly clone HoloJS from dbradleyfl repo.");;
      }
    }

    function copyBuildIntoTemplateApp () {
      try {
        console.log("Copying icons into HoloJS Template App");
        shell.cp("-r", path.join(USER_CWD, "icons"), path.join("HoloJS","HoloJS","ThreeJSApp","Assets"));
        console.log("Copying bundle");
        shell.cp(path.join(USER_CWD, "bundle.js"), path.join("HoloJS","HoloJS","ThreeJSApp","Scripts", "App.js"));
        console.log("\n\n\nSuccessfully packaged this application into a Universal Windows Platform Application. Open \"release/HoloJS/HoloJS/HoloJS.sln\" in Visual Studio. Right click ThreeJSApp and \"Set as Startup Project\". Click \"Build > Clean Solution\", then \"Build > Rebuild Solution\". Select your deployment target (Device, or emulator) in the menu then deploy the ThreeJSApp\n\n\n");
      } catch (e) {
        console.log(e);
        console.log("Failed when trying to copy build into HoloJS template app.");
      }
    }
    break;
  default:
    printAciiHololens();
    console.log("\n**************************\nMixed Reality JS Framework \n**************************\n\nAvailable commands: \n\nmrjs new (to create a new mrjs app)\nmrjs start (to start the development server server)\nmrjs package (to build a Hololens compatible Universal Windows Platform application)\n\nWelcome to the Metaverse :)");
}

function printAciiHololens () {
  console.log(`
............................................ ........................................................
................ iGG000000000000GGGCCLLfffttt1111111iiiiii;..........................................
........i11ttfLCGGG0000000000000GGGCCCLLfffftttt1111111iiiiitiiiiiiiiii.. ...........................
.. iiii11ttfLCCG00000000000000000000000CCCCCLLLLLfffftttttiii1iiiiiiiiiiiiiii111i ...................
.iii11ffLLLCCCG000000008008808000000000CCCCCCLLLLLfffftttt01111111111111111111111ttttttt ............
 i:i1tffLLCCCCG88888888888888000000000GCCCCCCLLLLLfffftttt11111111111111111ttttttttttttfttftf;.......
..:ittffLLCCCGG08888888888888000888880GLCCCCCCLLLLLfffftttttttttttttttttttttttffffffffffffffffftt....
..;ittfLLCCCCGGG88888888888888888888888GGCCCCCCLLLLLfffftttfffffffffffffffffffffLfLLLLLLLLLLLffft1;..
..:1tffLLCCCGGGG88888888888888888888888GGGGCCCCCLLLLLffffttLLLLLffffffffLLLLLLLLLLLLLLLCLLLLLLLLfti..
. :1tffLLCCCGGGG08888888888888888888888GGGGGCCCCCLLLLLfffftLffffttLCLLLLLLLLCCCCCCCCCCCCCCCCCCLLff1 .
.i:itffLLCCCGGGG00888888888888@@@@8800GCCCCLGLLLLfffffttttt........... ,ffGG0Lf1LGGGGGGGGGCCCCCCLf1..
..:i1tfLLCCGGGGG0008@@@@@@@@@888888888GGGGGCGLLLLffftttt11tGLLLCCCCCCCCCCCCCCCCCCCCLGGLLC0GGGGCCLft..
..C;1tfLLCCCGGGG0000@@@@@@@@8888888000GGGGGCGCCCLLLLLfffffLGGGGGGGGGGGGCCCCCCCCCCCCCCCCfffffffff1Lt .
.. ;itffLLCCGGGGG0000@888@@@@880000000GGGGGCGCCCLLLLLLffffGGGGGGGGGGGGGGGGGGGGGGGGGGGGCCCCCGGCffff1..
...i;1tfLttttGGGGGG0000880@0@8@888000000GGGGCCCCCLLLLLLLLLGGGGGGGGGGGGGGGGGGGGGCCGGCCCGGGGGCCffff1...
....Liit1t111111111110C80G800@08@8GGG00000800GCCGGCGCGCCLGGGGGCCGGGGCCCCGGCLf.........GCtffft........
.....tiit1iiiiiiiiiiiCG1tG8@GC@0888000000001GCLLLLLLLLLGG0GGGGGGGGGGGGGGCfLL.........................
.......GitL:;;;;;;;;Li0i1L08C;i@@800C;;;;;;;;;;;:Ct..................................................
........fitf,::::1fLLL;;fL00;;:::i880L::::;8f........................................................
..........f1...,,.   C..C00::::::::@@1  .............................................................
...........i;.  .;:..................................................................................
......................................................................Microsoft.Hololens.ASCII.Art...
`);
}
