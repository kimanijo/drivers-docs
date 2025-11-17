---
title: Waveshare POE Modbus RTU Relay
categories: ["auxiliaries"]
description: Waveshare POE Modbus RTU Relay
thumbnail: ./waveshare-poe-modbus-rtu-relay.webp
---



 Features
The relay controller is an industrial 8-ch relay module controlled via Ethernet port, adopts Modbus RTU/Modbus TCP protocols, supports PoE power supply, also comes with an ABS rail-mount case.

Features flash-on, flash-off function, by passing argument to the command, it is possible to turn on the relay for a while and then close it automatically
Supports DC 7~36V wide range power input and PoE power supply
Supports relay control through MQTT protocol, comes with Alibaba Cloud MQTT application demo
Onboard Optocoupler isolation, prevent the relay from being interfered by high-voltage circuit
Reverse-proof circuit, prevent the circuit from being damaged accidentally by incorrect connection
High-quality relay, contact rating: ≤10A 250VAC/30VDC
Rail-mounted ABS case, easy to install, safe to use
4 LEDs and Network indicators for indicating the MCU status and signal transceiving status
The INDI Waveshare driver provides control to toggle the Relays on and off. All Relay labels can be customized. When using this driver as an Output driver in the Universal ROR driver, make sure to reference the indexes starting from Digital Output #1 until Digital Output #8.

 Connection
Since the controller operates using Modbus RTU by default, you must change the transfer protocol to Modbus_TCP protocol. Without this change, connection to the relay from the driver will fail.

thumb modbus tcp

Specify the IP address of the controller in the Connection tab. Leave the port as it is.

connection

 Operation
The driver provides switch control to toggle on/off the relays. You can customize the relay labels as desired.

main control panel

