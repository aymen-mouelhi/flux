/**
 * Created by I060307 on 15/03/2015.
 */
var MessageSection = require('./MessageSection.react');
var React = require('react');
var ThreadSection = require('./ThreadSection.react');

var ChatApp = React.createClass({

    render: function() {
        return (
            <div className="chatapp">
                <ThreadSection />
                <MessageSection />
            </div>
        );
    }

});

module.exports = ChatApp;