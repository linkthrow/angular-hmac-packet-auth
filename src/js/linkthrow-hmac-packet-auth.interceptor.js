(function() {
    'use strict';

    angular
        .module('linkthrow.hmacPacketAuth')
        .factory('AddAccessTokenHeaderInterceptor', AddAccessTokenHeaderInterceptor);

    /** @ngInject */
    function AddAccessTokenHeaderInterceptor(localStorageService) {
        return {
            request: function(config) {
                var accessToken = localStorageService.get('token');
                if (accessToken) {
                    var dataString = {};

                    var shaObj = new jsSHA('SHA-512', "TEXT");
                    shaObj.setHMACKey(accessToken, "TEXT");

                    //For get requests
                    if(!isUndefinedOrNull(config.params)) {
                        dataString = convertAllToString(config.params);
                    }

                    //For post requests
                    if(!isUndefinedOrNull(config.data)) {
                        dataString = convertAllToString(config.data);
                    }

                    //Add meta data
                    dataString['token'] = accessToken;
                    dataString['timestamp'] = (Math.round(+new Date()/1000)).toString();
                    dataString['client-nonce'] = randomString(32);
                    dataString['url'] = config.url;

                    shaObj.update(JSON.stringify(dataString));

                    config.headers['access-token'] = dataString['token'];
                    // config.headers['ip-address'] = ipAddress;
                    config.headers['timestamp'] = dataString['timestamp'];
                    config.headers['client-nonce'] = dataString['client-nonce'];
                    config.headers['url'] = dataString['url'];
                    config.headers['hash'] = shaObj.getHMAC("HEX");
                }
                return config;
            }
        };
    }

    function isUndefinedOrNull(val) {
        return angular.isUndefined(val) || val === null
    }

    function convertAllToString(object) {
        var newObject = {};
        var objectKeys = Object.keys(object);
        Object.keys(object).forEach(function(key) {
            newObject[key] = object[key].toString();
        });
        return newObject;
    }

    function randomString(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        return randomString;
    }

})();