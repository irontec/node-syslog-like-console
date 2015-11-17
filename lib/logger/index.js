'use strict';

var log = require('./log');

function Logger(logProvider) {

    var logger = logProvider || console;

    return {
        'log': log(logger, logger['LOG_NOTICE']),
        'info': log(logger, logger['LOG_INFO']),
        'error': log(logger, logger['LOG_ERR']),
        'warn': log(logger, logger['LOG_WARNING']),
        'debug': log(logger, logger['LOG_DEBUG'])
    };

}

module.exports = Logger;
