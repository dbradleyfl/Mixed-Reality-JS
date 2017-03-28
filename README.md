# Mixed-Reality-JS
A simple framework for building Hololens applications with Javascript and [ThreeJS](https://github.com/mrdoob/three.js/). Derived from [HoloJS](https://github.com/Microsoft/HoloJS).

## Requirements
* Windows 10
* Hololens (Or emulator)

## Getting Started

1. Clone this repository.

2. Make sure your Hololens development environment is all setup [using Microsoft's guides](https://developer.microsoft.com/en-us/windows/holographic/getting_started).

3. Run *npm install; npm start;*. Write your three js app in the src/ folder.

4. To deploy and debug, on emulator or device, run *npm run package*, open the HoloJS solution located in the release/ folder in Visual Studio. Build > Clean Solution. Build > Rebuild Solution. Deploy the app named after your package.json to either your emulator or device.
