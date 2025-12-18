---
title: SkySensor2000PC
categories: ["mounts"]
description: SkySensor2000PC
thumbnail: ./skysensor2000pc.webp
---
## Features

This driver supports the SkySensor2000PC telescope contoller using the LX200 compatible protocol. The driver is similar to the LX200 driver but the features that are not supported by the SkySensor2000PC have been removed. There are no extra features for this driver.

## Operation

Using any INDI client, you can issue GOTO and Sync commands. The driver is known to work with firmware version 2.06. Since no features specific to this firmware version are used, the driver should also work with other firmware versions. If you are facing permission issues, add your user to the  **dialout**  group. After executing the following commands, please restart your PC for it to take effect.