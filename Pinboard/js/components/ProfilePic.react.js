/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={'https://graph.facebook.com/' + this.props.username + '/picture'} className="profile-img" />
        );
    }
});

module.exports = ProfilePic;