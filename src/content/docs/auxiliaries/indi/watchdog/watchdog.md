---
title: Watchdog
categories: ["auxiliaries"]
description: Watchdog
thumbnail: ./watchdog.webp
---

 Features
When operating a remote observatory, complete control of the devices rest with the remote INDI servers and drivers. In case of a communication loss, the observatory should be capable of performing a graceful shutdown until communication is established again by the client.

Since the actual shutdown procedure can be unique to each observatory, the user should be able to configure the exact required shutdown procedure. But for most users, the usual shutdown procedure involves parking the mount followed by parking the dome, if one exists. Using INDI WatchDog driver, the user can secure their remote observatory by setting a heart beat timeout threshold. A heart beat is a signal from the client to the watchdog driver to inform it that communication is OK. The user can configure the heart beat timeout in minutes in the WatchDog driver. If the driver does not receive the signal after the heart beat timeout threshold, it initiates the shutdown procedure. To disable the heart beat check, set it to zero.

Equipment Profile

The Watchdog driver is categorized as an Auxiliary driver. It can be found in the auxiliary category group in your favorite client.

 Options
Options

Before establishing connection, set the Mount & Dome driver names in Options tab. Some clients (e.g. KStars) would do this step automatically. If your observatory does not have a dome, simply leave it as the Dome Simulator.

 Main Control
Main Control

If the driver does not receive the Heartbeat signal from the client after the timeout threshold expired, it starts the shutdown procedure. The shutdown procedure is currently composed of the following steps in order:
Park Mount: The mount driver specified under Options tab will be commanded to park. After parking is successful, the driver proceeds to the next step, otherwise it aborts the shutdown procedure.
Park Dome:The dome driver specified under Options tab will be commanded to park.
Execute Script:Execute a custom shutdown script as specified in the settings property. The script must be executable and exits successfully for this operation to be considered successful.
To park the mount and dome, the driver needs to act as a client as well in order to issue such commands. You need to specify the indiserver host and port where the dome and mount drivers are running. This is usually localhost at port 7624 which is the default value. The shutdown script can be used to perform any additional shutdown functions (e.g. turn off power, send email...etc). You can use Python INDI Client library to command devices, or INDI's built in scripting tools. All values can be saved in the config file by going to Options and clicking Save under the Configuration property. On subsequent runs, all values shall be loaded automatically on start up.

 Issues
There are no known bugs for this driver. If you found a bug, please report it at INDI's