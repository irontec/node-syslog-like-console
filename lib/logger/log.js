'use strict';

function Log(logProvider, logType) {

    var logger = logProvider;
    var type = logType;

    return log;

    function log(tag, message) {
        var msg = tag.toString();

        if (message) {
            msg += ': ' + message.toString();
        }

        logger.log(type, msg);
    }

}

module.exports = Log;
