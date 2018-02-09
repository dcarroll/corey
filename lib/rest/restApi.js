'use strict';

const path = require('path');
const { AuthInfo, Connection } = require('sfdx-core');
const messages = require(path.join(__dirname, '..', 'messages'))();

// Private helper functions
/*
const _function_name = (arglist) => {
    console.log(arglist);
    return;
};
*/


/**
 * Describe the utility of your plugin *
 */
class Rest {
    /**
     * Public members of the Rest class
     * @yourParam {type} description
     * @returns {Promise}.
     */

    async get(context) {
        const username = context.flags.username; // "test-mzcy93qygczt@example.com";
        const url = context.flags.url; // "/";
        return await AuthInfo.create(username)
            .then(authInfo => {
                // console.log('TEST: authInfo =', authInfo.getConnectionOptions());
                return Connection.create(authInfo);
            })
            .then(conn => {
                // console.log('TEST: connection =', conn);
                return conn.request(url);
                // return conn.describe('Account');
                // return conn.query('select name, TotalLicenses, UsedLicenses from UserLicense');
                // return conn.request('http://shetzel-ltm2.internal.salesforce.com:6109/services/data/v42.0/sobjects/User');
            })
            .then(res => {
                console.log(JSON.stringify(res, null, 4));
            })
            .catch(err => {
                console.log('authTest error=', err);
            });        
    }

    getHumanErrorMessage(){ 
        return 'Your plugin ran into an error.'
    }
    getHumanSuccessMessage() {
        return 'Your plugin ran successfully!'
    };

    /**
     * Other public methods in your plugin
     * @param {string} param desc
     * @param {string} param desc
     * @returns {Promise} result value
     */
    // TODO - write your own method
    // delete(alias, group = Alias.Groups.ORGS) {
    //     return Alias.set(alias, undefined, group);
    // }

}

module.exports = Rest;
