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