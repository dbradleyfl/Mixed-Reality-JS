# Mixed Reality JS
A simple framework for building Hololens applications with Javascript and [ThreeJS](https://github.com/mrdoob/three.js/). Derived from [HoloJS](https://github.com/Microsoft/HoloJS).

## Requirements
* Windows 10
* Hololens (Or emulator)

## Getting Started

1. Run *npm install -g mrjs*, then *mrjs new your_app_name*, then *cd your_app_name*.

2. Run *mrjs start*. Write your three js app in the src/ folder.

3. Make sure your Hololens development environment is all setup [using Microsoft's guides](https://developer.microsoft.com/en-us/windows/holographic/getting_started).

4. To deploy and debug, on emulator or device, run  *mrjs package*, open the HoloJS solution located in the release/ folder in Visual Studio. Change the deployment app from HoloHost to ThreeJSApp. Build > Clean Solution. Build > Rebuild Solution. Select your deployment target (Device, or emulator) in the menu then deploy the ThreeJSApp.
