/**
 * Created by I060307 on 15/03/2015.
 */
//var SearchSection = require('./SearchSection.react');
var React = require('react');
var DashboardSection = require('./DashboardSection.react');

var PinApp = React.createClass({

    render: function() {
        return (
            <div className="chatapp">
                <DashboardSection />
            </div>
        );
    }

});

module.exports = PinApp;