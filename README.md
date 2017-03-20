# HoloJS-Builder
A simpler and more opinionated framework for building Hololens applications with Javascript and [ThreeJS](https://github.com/mrdoob/three.js/). Based on [HoloJS](https://github.com/Microsoft/HoloJS).

## Requirements
* Windows 10
* Hololens

## Getting Started

1. Clone this repository.

2. Make sure your Hololens development environment is all setup [using Microsoft's guides](https://developer.microsoft.com/en-us/windows/holographic/getting_started).

3. Run *npm install; npm start;*. Make sure that the gulp build process has successfully downloaded HoloJS before making changes to the app. The terminal will say "Successfully downloaded HoloJS and Angle". Write your three js app in src/app.js file. Do not try to npm install and require any other external dependencies. Currently HoloJS-Builder only supports building apps with the ThreeJS library. It does not support imports or requires.

4. To deploy and debug, on emulator or device for the first time, open the HoloJS solution in Visual Studio. Build > Clean Solution. Build > Rebuild Solution. Deploy the app that is named ThreeJSApp to either your emulator or device.

5. Edit your app in src/app.js with your favorite text editor and changes will be piped into the Visual Studio application. Edit the Icons folder to change app icons.
