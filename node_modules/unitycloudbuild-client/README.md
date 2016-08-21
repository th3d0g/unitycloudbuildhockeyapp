# ucb-nodejs-client

This is a test client for the Unity Cloud Build API, that uses swagger-js library.

## Usage

```javascript
var ucbclient = require('unitycloudbuild-client').client;

ucbclient(apiUrl, apiKey, function(client) {
	
	client.users.getUserSelf()
        .then(function(user) {
          console.log('my user record:', user);
        })
        .catch(function(error) {
          console.log(error);
        });

});
```

## Exploration

within ucbclient callback, use `client.help()` to list available all available collections and methods. use `.help()`  on collection methods to see info on necessary parameters.