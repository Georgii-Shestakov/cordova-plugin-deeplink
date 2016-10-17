var cordova = require('cordova');

function openLink(link) {
   window.open(link, '_blank', 'location=yes');
}

module.exports = {
    open:  openLink
};

require("cordova/exec/proxy").add("OpenDeepLink", module.exports);
