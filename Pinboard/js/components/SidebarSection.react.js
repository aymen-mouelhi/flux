/**
 * Created by Martin on 24/03/2015.
 */

var React = require('react');

var Sidebar = React.createClass({
    render: function () {
        return (
			<div id="sidebar-wrapper">
				<h4>Recent items</h4>
	            <ul class="sidebar-nav">
	                <li class="sidebar-brand">
	                    <a href="#">Start Bootstrap</a>
	                </li>
	                <li>
	                    <a href="#">Dashboard</a>
	                </li>
	            </ul>
	            <p>Contents</p>
	        </div>
        );
    }
});

module.exports = Sidebar;