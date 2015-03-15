/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var Ribbon = require('./Ribbon.react');

var ProfileInfo = React.createClass({
    render: function() {
        return (
            <div className="info">
                <div className="username">
                    <strong className="fullname">{this.props.username}</strong>
                </div>
                <span className="screenname">
                    <a href={'https://www.facebook.com/' + this.props.username} className="screenname">
                        {this.props.username}
                    </a>
                </span>
                <Ribbon image ={this.props.category_image} />
            </div>
        );
    }
});

module.exports = ProfileInfo;