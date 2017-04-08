# Mixed Reality JS
A simple framework for building Hololens applications with Javascript and [ThreeJS](https://github.com/mrdoob/three.js/). Derived from [HoloJS](https://github.com/Microsoft/HoloJS).

## Requirements
* Windows 10
* Hololens (Or emulator)

## Getting Started

1. Run *npm install -g mrjs*, then *mrjs new your_app_name*, then *cd your_app_name*.

2. Run *mrjs start*. Write your three js app in the src/ folder.

3. Make sure your Hololens development environment is all setup [using Microsoft's guides](https://developer.microsoft.com/en-us/windows/holographic/getting_started).

4. To deploy and debug, on emulator or device, run  *mrjs package*, open the HoloJS solution located in the release/ folder in Visual Studio. Change the deployment app from HoloHost to ThreeJSApp (right click ThreeJSApp in Solution Exporer and click "set as StartUp project"). Build > Clean Solution. Build > Rebuild Solution. Select your deployment target (Device, or emulator) in the menu then deploy the ThreeJSApp.

## Contributions
Hoping to keep this project moving along and toward being a framework for building VR/AR/MR applications for any device with Javascript. Below are a couple things that need to be impolmented into this version.

## Missing Features
* The name of the Universal Windows Application and description / author information should be pulled from the package.json
* Path issues within the UWP need to be addressed. For example, putting a "./" infront of the example app's texture.png url will break the UWP and fail silently. Need to find a solution for that.
* Piping images and other assets into the UWP isn't fully inmplemented yet.
* I'd like to have a --template option for mrjs new the allows you to select ThreeJS or AFrame as your perfered framework.
* I'd like to have an option for packaging for gearvr, mrjs package_gearvr, that injects the ThreeJS app into a GearVRF application. Need to figure out how difficult running WebGL/ThreeJS will be with GearVRF.
