/**
 * Created by Martin on 24/03/2015.
 */

var React = require('react');

var DashboardHeader = React.createClass({
    render: function () {
        return (
			<div id="dashboard-header">
                <div id="closingTag" className="menu-toggle"></div>
				<p>Filter settings</p>
	        </div>
        );
    }
});

module.exports = DashboardHeader;