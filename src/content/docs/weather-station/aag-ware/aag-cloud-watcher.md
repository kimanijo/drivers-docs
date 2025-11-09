---
title: AAG Cloud Watcher
category: Weather Station
description: AAG Cloud Watcher
thumbnail: /images/weather-station/aag-cloud-watcher/aag-cloud-watcher.webp
---

## Features

The AAG CloudWatcher comprises:

- **Clouds sensor**: Through an infrared sensor of the AAG CloudWatcher measures the temperature of the sky, and an electronic thermometer measures the internal temperature. Both data are then related by a powerful formula used to determine the existence of clouds.

- **Rain sensor**: CloudWatcher uses a variable capacitor to determine the existence of rain. In addition, the capacitor incorporates an internal resistance for heating the element, drying it, which allows a constant reliable reading.

- **Light sensor**: To distinguish between day and night. It can even detect the Moon.

- **Temperature sensor**

- **Anemometer** (optional)

The current **indi_aagcloudwatcher** driver has the following features:

- Shows the RAW readings as well as the corrected ones for every sensor (infrared sky, corrected infrared sky, infrared sensor, rain sensor, rain sensor temperature brightness sensor and ambient temperature sensor).

- Shows the weather conditions in plain understandable options:
  - Cloud conditions: Clear, cloudy, overcast
  - Rain conditions: Dry, Wet, Rain
  - Brightness conditions: Dark, Light, Very Light

- Allows to control the internal relay (switch) of the unit.

- Reading interval is configurable.

- The algorithm to control the rain sensor heater is fully implemented.

- Allows to tune up all the unit configurable parameters.

- And some more options...

## Operation

Just connect the driver and watch the sensor information.
