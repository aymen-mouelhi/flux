/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var Avatar = require('./Avatar.react');
var CardHeader = React.createClass({
    render: function() {
        return (
            <Avatar username={this.props.username} category={this.props.category} />
        );
    }
});

module.exports = CardHeader;