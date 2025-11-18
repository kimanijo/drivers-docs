---
title: GPSD
categories: ["auxiliaries"]
description: GPSD.
thumbnail: ./gpsd.webp
---



# GPS

## Features

Tip: StellarMate users can simply follow the  [GPS video tutorial](https://www.youtube.com/watch?v=VQHUaO5Hmi0).

A GPS device is also required. Many devices are support, please check the  [hardware compatiblity](http://www.catb.org/gpsd/hardware.html)  page before purchasing a GPS device and make sure the GPS device is supported under Linux. The  [U-Plox AG](http://www.hardkernel.com/main/products/prdt_info.php?g_code=G142502154078)  GPS available from Odroid is one example of a comptabile device. Depending on the device, you might need to edit  _/etc/default/gpsd_  file and edit the DEVICES= section to add the serial port for your GPS device there (e.g. /dev/ttyACM0).

Make sure GPS is receiving data by running  _gpsmon_

## Operation

![gpsd main control](./images/gpsd_main_control.webp)Upon connection, it should take a few seconds before the GPS fixed is usually obtained. Depending on your client, you might need to configure it to synchronize it with GPS data with the mount and other devices. KStars performs this synchronization automatically without requiring any further action from the user.

### GPSD vs NMEA?

INDI GPS NMEA driver fills the gap for people who use mobile phone's gps for setting location and time in KStars/Ekos. indi-gpsd does pretty much the same, however it is based on different approach. Both of the drivers set time and location (over INDI server) to other INDI drivers (e.g. mount) and clients (e.g. KStars), but:  
  
**indi-gpsnmea**:

-   reads gps data stream from mobile phone's gps
-   requires network connection of the source of gps data stream i.e. phone running app, which enables gps sharing
-   does not set operating system time/date based on gps source
-   it is operating system independent

**indi-gpsd**:

-   reads gps data stream from gpsd service
-   requires gpsd service is running and properly configured as a systemwide service
-   ntpd service can read from gpsd service to synchronize operating system time/date to gps source
-   it is operating system dependent and can be used on Linux and OS X, but not Windows

There's no conflict between the two - NTP gets time from GPSD to set operating system time/date, not INDI drivers' and clients' time/date.  
We can consider merging these drivers at some point in time, but for now you should run either indi-gpsnmea or indi-gpsd. Using both drivers at the same time makes no sense.