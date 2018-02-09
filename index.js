'use strict'

const path = require('path');
const restget = require('./commands/rest/rest_get.js');
const restTopic = require('./commands/rest/rest.js');

(function () {
  'use strict';

  exports.topics = [restTopic()];

  exports.namespace = {
    name: 'djcy',
    description: 'rest commands the djcy namespace'
  };

  exports.commands = [restget];

}());