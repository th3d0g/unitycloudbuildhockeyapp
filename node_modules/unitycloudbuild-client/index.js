var Swagger = require('swagger-client');

var apiClient = function(url, token, callback) {
    new Swagger({
        url: url,
        usePromise: true,
        authorizations: {
            'basicAuth': new CustomAuthHeader(token)
        }
    })
    .then(function (client) {
        console.log('Unity Cloud Build client loaded OK.');

        callback(client);
    })
    .catch(function(error) {
        console.log('UCB error: ' + error);
    });
};
exports.client = apiClient;

var CustomAuthHeader = function(token) {
    this.enctoken = new Buffer(token + ':').toString('base64');;
};

CustomAuthHeader.prototype.apply = function(obj, authorizations) {
    var headerValue = 'Basic ' + this.enctoken;
    console.log('header value: ' + headerValue);

    obj.headers["Authorization"] = headerValue;
};