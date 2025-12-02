---
title: Shoestring Astronomy FCUSB
categories: ["focusers"]
description: Shoestring Astronomy FCUSB
thumbnail: ./fcusb.webp
---

## Features

The FCUSB is a product that allows you to control a DC focus motor (or any DC motor for that matter) by way of a USB port and software on your computer. If you are already using a computer in your observatory for other reasons, this provides a way for you to focus your telescope without fumbling around in the dark for the focuser handcontroller. It works best with 5V focus motors such as the newer style JMI Motofocus, but can also work with 9V or 12V motors. Motors requiring up to 100mA of current will work with the FCUSB. To date, the FCUSB has been tested with the JMI Motofocus, Moonlite DC motorized focusers, Orion AccuFocus, Meade 1209, Televue Focusmate Driver.

![FCUSB Control Panel](https://stellarmate.com/images/devices/fcusb/main_control.jpg)

### Main Control Tab

TODO

## Connection

![FCUSB Connection](https://stellarmate.com/images/devices/fcusb/connection.jpg)

Connect to the focuser using a USB cable. The connection type is serial and by default the port is set to /dev/ttyUSB0. The default baud rate is 9600. If you change the default port, save the changes by going to the  **Options**  tab and click  _Save_  configuration.

## Operation

After establishing connection to the focuser, you can use the focuser control in the INDI control panel directly to move and sync the focuser. Alternatively, the focuser can be used in any INDI compatible autofocusing application.

## Options

The options tab provides several settings to tune the operation and performance of the focuser:

TODO