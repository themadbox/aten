/**
 * @link      https://github.com/themadbox
 * @copyright Copyright (c) Fluid Sport srl (https://www.fluidnext.com/)
 * @license   https://opensource.org/licenses/BSD-3-Clause New BSD License
 */

class Message {

    static get START_CHARACTER() {
        return 'sw'
    } ;

    static get END_CHARACTER() {
        return '\r'
    } ;

    constructor(body) {

        /**
         * @type {string}
         */
        this.body = body;

        /**
         * @type {boolean}
         */
        this.debug = false;
    }

    /**
     *
     * @return {string}
     */
    getStringMessage() {

        return `${Message.START_CHARACTER} ${this.body}${Message.END_CHARACTER}`;
    }
}


module.exports = Message;