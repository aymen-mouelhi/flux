/**
 * Created by I060307 on 15/03/2015.
 */
var PinApp = require('./components/PinApp.react');
var PinExampleData = require('./PinExampleData');
var WebAPIUtils = require('./utils/WebAPIUtils');
var React = require('react');

// export for http://fb.me/react-devtools
window.React = React;

// load example data into localstorage
// Todo: Get Data from Node JS App
PinExampleData.init();

// Get All Messages
WebAPIUtils.getAllCards();

// Render Application
React.render(
    <PinApp />,
    document.getElementById('react')
);

/*
var Fluxible = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');
var app = new Fluxible();

var pluginInstance = routrPlugin({
    routes: {
        user: {
            path: '/user/:id',
            method: 'get',
            // flux-router-component uses this action when the route is matched
            action: function (actionContext, payload, done) {
                // ...
                done();
            }
        }
    }
});

app.plug(pluginInstance);
*/