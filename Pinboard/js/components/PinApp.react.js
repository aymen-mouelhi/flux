/**
 * Created by I060307 on 15/03/2015.
 */
var HeaderSection = require('./HeaderSection.react');
var SearchSection = require('./SearchSection.react');
var React = require('react');
var DashboardSection = require('./DashboardSection.react');
var DashboardHeaderSection = require('./DashboardHeaderSection.react');
var SidebarSection = require('./SidebarSection.react');

var PinApp = React.createClass({

    render: function () {
        return (
            <div>
                <HeaderSection/>

			    <div id="wrapper">
			    	<DashboardHeaderSection />
			        <DashboardSection />			    					
					<SidebarSection />
				</div>

            </div>
        );
    }
});

module.exports = PinApp;