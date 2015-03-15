/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var CardDetails = React.createClass({
    render: function () {
        return (
            <div className="card-footer">
                <div className="timeago">
                    <p>2 hours ago</p>
                </div>
                <div className="location">
                    <p>500m</p>
                </div>
            </div>
        );
    }
});

module.exports = CardDetails;