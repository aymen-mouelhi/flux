/**
 * Created by I060307 on 15/03/2015.
 */
var HeaderSection = require('./HeaderSection.react');
var React = require('react');
var DashboardSection = require('./DashboardSection.react');

var PinApp = React.createClass({

    render: function () {
        return (
            <div>
                <DashboardSection />
            </div>
        );
    }

});

module.exports = PinApp;