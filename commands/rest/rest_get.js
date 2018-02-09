 'use strict';

// Node
const path = require('path');

// Local
const messages = require(path.join(__dirname, '..', '..', 'lib', 'messages'))();
const Rest = require(path.join(__dirname, '..', '..', 'lib', 'rest', 'restApi.js')); // eslint-disable-line global-require

//TODO - get this from sfdx_utils
//const logger = require(path.join(__dirname, '..', '..', 'lib', 'logApi'));

(function () {
    'use strict';

    module.exports = {
        command: 'get',
        topic: 'rest',
        description: messages.getMessage('description', [], 'rest_get'),
        longDescription: messages.getMessage('longDescription', [], 'rest_get'),
        help: messages.getMessage('help', [], 'rest_get'),
        requiresWorkspace: false,
        flags: [
            {
                name: "username",
                char: "u",
                description: "username for org to execute against, must ",
                hasValue: true,
                required: true
            },
            {
                name: "url",
                char: "l",
                description: "relative url for rest service to exercise",
                hasValue: true,
                required: true
            }
        ],
        // TODO - put all possible attributes in here behind comments

        run (context) {
            const rest = new Rest();
            return rest.get(context);
        }

    };
}());
