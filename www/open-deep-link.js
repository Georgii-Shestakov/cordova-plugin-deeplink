var exec = require('cordova/exec');

exports.open = function(link, success, error) {
    exec(success, error, "OpenDeepLink", "openLink", [link]);
};
