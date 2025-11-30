---
title: ZWO ASI EAF
categories: ["focusers"]
description: ZWO ASI EAF
thumbnail: ./asi-eaf.webp
---

## Features

The INDI ASI Focuser driver is for use with ZWO ASI electronic auto-focuser (EAF). It supports all models. The device **must**  be powered and connected before you run the INDI driver.

The ASI EAF contains a 35mm stepper motor subdivided into 5760 steps. It has a USB2.0 interface. Optionally a temperature sensor and hand controller can be purchased from ZWO. The purpose of the temperature sensor is to allow higher level software to monitor the ambient temperature and force a re-focus should the temperature change by a pre-determined amount. The purpose of the hand controller is to allow manual focus adjustment outside of higher level software like EKOS.

By convention, position zero corresponds to the telescope's focus mechanism being fully "in". As the focus mechanism is wound outwards, so the position increases. It is recommended that the maximum outward position be determined and the focus count that this corresponds to, set as the maximum focus, so that the focus mechanism is protected from the EAF attempting to drive the focus drawtube beyond its limits.

Like all mechanical gear based mechanisms, there is backlash in the ASI EAF. This can be worked out and set. Some, but not all, autofocus mechanisms rely on the backlash being setup. For more details on the ASI EAF including the mechanism ZWO recommends to workout backlash, see the manual  [here](https://astronomy-imaging-camera.com/manuals-guides).

The INDI control panel exposes data associated with the device and permits parameters to be set. In normal operation, higher level software, such as EKOS, will control the ASI EAF, but this document will utilise the INDI control panel GUI to explain the available features.

Raspberry PI 5 is reported to have issues driving the EAF directly due to power issues. Use a separate powered USB Hub

## Connectivity

The ASI EAF has a USB 2.0 interface. Earlier models required a separate 12v power supply but the newer devices are powered by the USB interface.

## Operation

The INDI control panel in EKOS exposes data associated with the device and permits parameters to be set. In normal operation, higher level software, such as EKOS, will control the ASI EAF, but this section will utilise the INDI control panel to explain the available features.

### First Use

When the focuser is first connected and the ASI EAF driver used for the first time, it is recommended to configure and save a profile that synchronises the  **ASI EAF**  driver to the focuser, and protects the device and the telescope by limiting the range of motion of the focuser to the limits of the telescope's drawtube. Perform the following:

-   Be sure to be familiar with the range of motion of your telescope's drawtube. That is its furthest "in" and "out" positions.
-   Power up the device.
-   Connect the  **ASI EAF**  driver.  **Main Control**  tab,  **Connect**.
-   Establish the furthest "in" position. This is the "0" position.
    -   Move the telescope drawtube as far "in" as it goes, being careful not to force it past its limit. This can be done from the  **Main Control**  tab, by setting  **Direction**  ->  **Force In**  and set  **Relative Position**  to a small number and press  **Set**. You will need to adjust the  **Relative Position**  number to a reasonable number through trial and error. Start small and increase. Repeat to move the focuser to the furthest "in" position.
    -   Enter "0" in the  **Sync**  parameter and press  **Set**.
-   Establish the furthese "out" position.
    -   Move the telescope drawtube as far "out" as it goes, being careful not to force it past its limit. The Main Control tab will display the Absolute Position. Enter this value in the  **Max. Position**  and press  **Set**.
-   If you wish to set a  **Backlash**  value set it now. See the  **Main Control**  tab for details.
-   Go to  **Options**  tab and press  **Configuration**  ->  **Save**.

The ASI EAF driver is now synchronised and configured to the device and can be used to focus the telescope.

### Main Control Tab

![Screenshot_2021-09-03_at_16.47.23.png](https://indilib.org/images/Screenshot_2021-09-03_at_16.47.23.png)

The  **Main Control**  tab displays and sets the main parameters for the device:

-   **Connection**: Displays and sets whether the driver is connected or not.
-   **Direction**: The current direction of motion:  **Focus In**  /  **Focus Out**.
-   **Relative Position**: Displays / sets a relative position. For example, if "5" is entered and  **Set**  pressed, the focuser will move 5 steps from its current position in whichever  **Direction**  is set.
-   **Absolute Position**: Displays / sets an absolute position, e.g. if 1,000 is entered and  **Set**  pressed, the focuser will move to step position 1,000.
-   **Max Position**: The maximum outward focus position.
-   **Abort Motion**: Stop focuser motion.
-   **Sync**: Synchronise the ASI EAF's current position to the position specified.
-   **Reverse Motion**: Reverse the direction of motion.
-   **Backlash**:  **Enable(d)**  /  **Disable(d**): backlash. Set the number of steps of backlash.
-   **Temperature**: Displays the temperature of the onboard thermometer.

### General Info Tab

![Screenshot_2021-09-03_at_16.47.47.png](https://indilib.org/images/Screenshot_2021-09-03_at_16.47.47.png)

The  **General Info**  tab displays information about the EAF and the Indi driver.

-   **Driver Info**: Information about the driver
-   **Version**: Firmward version.

### Options Tab

![Screenshot_2021-09-03_at_16.48.08.png](https://indilib.org/images/Screenshot_2021-09-03_at_16.48.08.png)

The  **Options**  tab allows the EAF options:

-   **Debug**: Displays the debug status. Note that debug options are set in Ekos as described  [here](https://stellarmate.com/support/logs-submission.html).
-   **Polling**: Displays the polling period in milliseconds.
-   **Configuration**: Manage the driver configuration.
    -   **Load**: Load the last saved settings.
    -   **Save**: Save the driver settings.
    -   **Default**: Restore default settings that were shipped with the driver.
    -   **Purge**: Delete the configuration file.
-   **Joystick**: Enable or Disable joystick support. An INDI Joystick driver must be running for this function to work. For more details, check the  [INDI Telescope Joystick](https://stellarmate.com/support/tutorials/135-controlling-your-telescope-with-a-joystick.html)  tutorial.
-   **Beep**: Set  **On**  /  **Off**. If  **On**  then the EAF will "beep" whenever the focus motor starts to move.

### Presets Tab

![Screenshot_2021-09-03_at_16.48.42.png](https://indilib.org/images/Screenshot_2021-09-03_at_16.48.42.png)

The  **Presets**  tab allows a number of focuser settings to be configured and then called up.

-   **Presets**: Allows 3 presets to be defined.
-   **Goto**: Goto one of the pre-defined  **Presets**.