var exec = require('cordova/exec');


module.exports = {
	open : function(link, success, error) {
	    exec(success, error, "OpenDeepLink", "openLink", [link]);
	}
};