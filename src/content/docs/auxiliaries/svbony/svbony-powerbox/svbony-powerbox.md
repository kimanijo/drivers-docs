---
title: SVBONY Astro Power Controller
categories: ["auxiliaries"]
description: SVBONY PowerBox
thumbnail: ./svbony-powebox.webp
---
## Features

7 12V DC outputs, Regulated Interface and switch1-5 interfaces can be individually controlled on/off;
The USB port can connect to guide cameras, planetary cameras, etc.; the DC port can connect to DSO cooled cameras, equatorial mounts, electronic focus controller, motorized filter wheels, and electronic field flatteners; and the RCA interface can connect to dew heaters;
Real-time detection of ambient temperature and humidity to achieve automatic temperature control throughout the process.

INDIドライバーで可能なコントロールは以下のとおりです。

- PWM 12V6Ax2ポート, 0から100%までのCycle変更が可能, ON/OFF切り替え可能
- DC5521 12Vx5ポート, ON/OFFの切り替え可能
- REGULATED OUT 1ポート, 0から15.3V の電圧調整が可能
- USB
  - USB 2.0 x 4 (Type-C x 1, Type-A x 3)
  - USB 3.0 x 2 (Type-A x 2)
  - Type-c,1,2 コネクタ と 3,4,5 コネクタの二組を ON/OFF 切り替え可能

### Note

- SV241 Pro に接続されるデバイスがある場合、Ekos の Start 時には他のデバイスよりも先に起動し、Ekos の Stop 時は他のデバイスより後に終了する必要があります。  
- 設定の方法は後述の Profile の Profile Script Editor を参照してください。  
- SV241 Pro の INDI ドライバーは起動時に自動的に Connect します。手動で Connect/Disconnect をするとそれより先に接続されているUSB機器の再接続が発生しそれらの機器のINDIドライバーが正常に動作しなくなる場合があります。

## Ekos > Profile > Script

![Profile](./images/profile.webp)

前述の通り SV241 Pro に接続されるデバイスがある場合、それらのデバイスよりも先に　SV241 Pro INDIドライバーを起動しコネクトさせる必要があります。
Ekos の Profile Editor の右下 [Scripts] ポタンから Profile Scripts Editor を開き SV241 Pro の実行順を制御するための待ち時間を設定します。

1. [Add Rule] で Rule を1行追加する。
2. Driver: "SVBONY SV241 Pro" を指定。
3. Post start: SV241 Pro INDIドライバー起動時の待ち時間を秒で指定する。指定の秒数間、他のドライバーは起動待ちになる。
4. Pre stop: Ekos [Stop] から SV241 Pro が終了開始するまでの待ち時間を指定する。他のドライバーが終了するのに十分な時間を指定しする。指定の時間が経過後つまり他のドライバーが終了後に SV241 Pro が終了する。

## Connection

![connection](./images/connection.webp)

コンピューターとSV241 Proの接続設定をします。

- System Ports: 選択可能なシリアルポートの一覧。
- Ports: 直接ポート名を入力できます。
- Baud Rate: 115200 固定です。変更しないでください。
- Auto Search:
  - Enables:自動的に接続先のシリアルポートを検出します。
  - Disabled: 手動で指定したシリアルポートで接続を試みます。
- Refresh > Scan Ports: コンピューターの現在のシリアルポートを検索し直し、System Ports をリフレッシュします。

## Dew

![Dew](./images/dew.webp)

＊＊＊＊＊

## Power

![Power](./images/power.webp)

＊＊＊＊＊

## Variable

![Variable](./images/variable.webp)

＊＊＊＊＊

## USB

![USB](./images/USB.webp)

＊＊＊＊＊