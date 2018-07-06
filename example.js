/**
 * @link      https://github.com/themadbox
 * @copyright Copyright (c) Fluid Sport srl (https://www.fluidnext.com/)
 * @license   https://opensource.org/licenses/BSD-3-Clause New BSD License
 */

(function() {
    'use strict';

    const Client = require('./lib/Client');
    const SerialPortAdapter = require('./lib/adapter/SerialPortAdapter');
    const Message = require('./lib/Message');
    const Utils = require('./lib/Utils');

    let prompt = require('prompt');

    let adapter = new SerialPortAdapter(
        '/dev/ttyUSB0',
        {
            baudRate: 19200
        }
    );

    /**
     * Scaler receiver
     */
    let client = new Client(adapter);
    client.on('message', function (message) {
        console.error(Utils.BLUE_CONSOLE, 'Message', message);
    });

    function getCommand() {
        prompt.get(['command'], function (err, result) {

            if (!result) {
                return;
            }

            switch (result.command) {
                case 'close' :
                    client.close();
                    console.error(Utils.GREEN_CONSOLE, 'Close application');
                    process.exit();
                    break;
                case 'one' :
                    client.sendMessage(new Message('i01'));
                    break;
                case 'two' :
                    client.sendMessage(new Message('i02'));
                    break;
                case 'next' :
                    client.sendMessage(new Message('+'));
                    break;
                case 'prev' :
                    client.sendMessage(new Message('-'));
                    break;
                default:
                    console.error(Utils.RED_CONSOLE, 'Wrong command');
                    break;
            }
            getCommand();
        });
    }

    prompt.start();

    getCommand();
})();
