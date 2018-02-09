'use strict';

const path = require('path');

const messages = require(path.join(__dirname, '..', '..', 'lib', 'messages'))();

module.exports = function () {
    return {
        name: 'rest',
        description: messages.getMessage('mainTopicDescriptionHelp', [], 'rest'),
        longDescription:  messages.getMessage('mainTopicLongDescriptionHelp', [], 'rest')
    };
};