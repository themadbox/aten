# ATEN library

This repository allow to use remote controll of the [eten hdmi switch](http://www.aten.com/global/en/products/professional-audiovideo/video-switches/vs0801h/). 
Now it's in beta and the functionality are very few.

## List functionality

You can download the [protocoll](http://assets.aten.com/product/manual/vs0801h_w-2017-02-06.pdf). 
Functionality:

* Next/Previus channel
* Select channel (1-8)

## Usage

```javascript
// Require library
const aten = require('aten');

// Create serial adapter
let serialAdapter = new aten.SerialAdapter(
    '/dev/ttyUSB0',
    {
        baudRate: 19200
    }
);

// Create the client serial adapter
let client = new aten.Client(serialAdapter);
/**
*  Sent channel one
*/
client.sendMessage(new aten.Message('i02'));
/**
*  Sent channel two
*/
client.sendMessage(new aten.Message('i01'));
/**
*  Sent next channel 
*/
client.sendMessage(new aten.Message('+'));
/**
*  Sent previous channel 
*/
client.sendMessage(new aten.Message('-'));

```
