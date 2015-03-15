/**
 * Created by I060307 on 14/03/2015.
 */
var ChatApp = require('./components/ChatApp.react');
var ChatExampleData = require('./ChatExampleData');
var ChatWebAPIUtils = require('./utils/ChatWebAPIUtils');
var React = require('react');

// export for http://fb.me/react-devtools
window.React = React;

// load example data into localstorage
ChatExampleData.init();

// Get All Messages
ChatWebAPIUtils.getAllMessages();

// Render Application
React.render(
    <ChatApp />,
    document.getElementById('react')
);