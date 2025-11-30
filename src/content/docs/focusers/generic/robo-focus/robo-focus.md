---
title: RoboFocus
categories: ["focusers"]
description: RoboFocus
thumbnail: ./robo-focus.webp
---

## Features

The settings of the RoboFocus device are polled and displayed in the corresponding fields. Main Control Tab

-   Port: Set the name of the RS 232 port. The speed is fixed to 9600 baud.
-   Temperature: read out of the built in temperature sensor (not a real useful device)
-   Position: shows the actual position.
-   Speed, Timer: As described above.
-   Absolute goto: the focuser moves to the absolute position. Relative goto: the focuser moves the defined ticks (negative or positive).
-   Options: the settings step delay and motor steps per tick determine how fast the stepper motor turns. The duty cycle is can be set to zero for a main mirror focuser setup and to a decent value for a rack and pinion focuser. Read the RoboFocus manual.
-   Extrema: the movement of the focuser and the position setting can be limited.
-   Power: set the four digital outputs (used for optional RoboFocus accessory)
-   Maximum travel: (to me the RoboFocus documentation is unclear.)
-   Set register Position: set the counter to the value given in the input field.
-   Set register Backlash: define the amount of ticks. If the back lash correction and the absolute or relative movement have opposite signs RoboFocus will move into the negative direction of the main movement at the end.

## Operation

The INDI RoboFocus driver provides complete functionality for all the features supported by RoboFocus including relative and absolute positioning, temperature readout, and configuration parameters. Use the default settings for duty cycle, step delay and motor steps per tick (a tick is a counter increment by one). Set the back lash correction only to a non zero value in case you measured it. RoboFocus is a slow device and sometimes the position needs to be read out separately. That needs additional time. If the LED indicator became green again of given property the robofocus driver resumed normal operation regardless what happened before. You can have a fine control of the focuser by setting the following parameters in the driver:

1.  Focus Direction: in or out with respect to the primary objective.
2.  Focus Speed: Since RoboFocus is based on a stepper motor, speed is constant.
3.  Focus Time: The duration of the focus motion in milliseconds before halt.
Robofocus driver provides the following features: absolute and relative movement, resetting the counter to a given position, maximum and minimum travel, backlash compensation, duty cycle, step delay, number of motor steps per counter increment (tick), the read out of the built in temperature sensor and the four output lines used to control the remote power modules (optional accessories).