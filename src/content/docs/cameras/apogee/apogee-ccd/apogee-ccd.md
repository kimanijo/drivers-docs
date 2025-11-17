---
title: Apogee CCD
categories: ["Cameras"]
description: Apogee CCD
thumbnail: ./apogee-ccd.webp
---

## Features

The Apogee driver should support all features of the Alta and Aspen cameras including

-   USB or Ethernet connection
-   Temperature setpoint
-   Hardware binning
-   Frame sub-selection
-   Shutter capture mode; Dark, Bias, Light
-   Fan speed

## Configuration

In order to use your Apogee camera in INDI the first step is to configure the CCD setting in a new profile or editing and existing one. Here is a new profile where we are selecting our CCD as an Apogee CCD.

![config](https://stellarmate.com/images/devices/apogee-ccd/config.webp)

## Operation

After configuring your profile to use an Apogee camera, connecting to INDI will create new tabs for your camera that contain your camera's detailed specifics. In this case I have connected an Apogee Alta 8300 which uses a Kodak KAF-8300 chip via USB.

### Main Control

![maincontrol](https://stellarmate.com/images/devices/apogee-ccd/maincontrol.webp)

### Options

The Options tab contains various settings for simulation, default file locations, upload behavior and debugging.![options](https://stellarmate.com/images/devices/apogee-ccd/options.webp)

### Image Settings

The Image Settings tab contains default settings for binning, sub framing, compression and frame type. Frame type controls the shutter such that you can take dark and bias frames with the shutter closed. All these options are available in the Ekos CCD application, you could change them here to establish different start up defaults.![imagesettings](https://stellarmate.com/images/devices/apogee-ccd/imagesettings.webp)

### Image Info

The Image Info tab contains the read only details of the underlying CCD's dimensions, pixel size and bit depth.![image info](https://stellarmate.com/images/devices/apogee-ccd/image-info.webp)

