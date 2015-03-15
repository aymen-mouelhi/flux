/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var ProfilePic = require('./ProfilePic.react');
var ProfileInfo = require('./ProfileInfo.react');

var Avatar = React.createClass({
    render: function() {
        return (
            <div className="user-info">
                <ProfilePic username={this.props.username} />
                <ProfileInfo username={this.props.username} category_image={this.props.category}/>
            </div>
        );
    }
});

module.exports = Avatar;