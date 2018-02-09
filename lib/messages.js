// TODO - externalize util
const util = require('util');

const TARGET_USERNAME_PARAM = 'targetusername';

const messages = {
    default: {
        en_US: {
            // errors
            // help
            displayCommandRestGetHelp: 'Replace with your topic description.'
        }
    },

    rest: {
        en_US: {
            name:'rest',
            mainTopicDescriptionHelp: 'short description of your topic',
            mainTopicLongDescriptionHelp: 'longer description of your topic'
        }
    },

    rest_get: {
      en_US: {
            help: "Help information specific to this command",
            description: "Rest get description",
            longDescription: "Longer description of Rest get.",
            GeneralError: "A general error for the Rest get command."
      }

    }

 };

const _getLocale = function() {
    return 'en_US';
};

module.exports = function(locale = _getLocale()) {
    return {
        getMessage(label, args, bundle = 'default') {

            const bundleLocale = messages[bundle][locale];

            if (util.isNullOrUndefined(bundleLocale)) {
                return null;
            }

            if (util.isNullOrUndefined(bundleLocale[label])) {
                throw new Error(util.format(bundleLocale.UndefinedLocalizationLabel, bundle, label, locale));
            }

            if (util.isNullOrUndefined(args)) {
                return bundleLocale[label];
            } else {
                const everyone = [].concat(bundleLocale[label], args);
                return util.format(...everyone);
            }
        },

        getLocale() {
            return _getLocale();
        },

        get targetusername() {
            return TARGET_USERNAME_PARAM;
        }
    };
};
