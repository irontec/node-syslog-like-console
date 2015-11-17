'use strict';

var syslog = require('node-syslog');
var Logger = require('./logger');

function Log(name, maskLevel, upTo) {

    syslog.init(
        name,
        syslog.LOG_PID | syslog.LOGODELAY,
        syslog.LOG_LOCAL0
    );

    if (!maskLevel) {
        return Logger(syslog);
    }

    if (typeof upTo === 'undefined') {
        upTo = true;
    }

    syslog.setMask(syslog[maskLevel], upTo);

    return Logger(syslog);

}

module.exports = Log
