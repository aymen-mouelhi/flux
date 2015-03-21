/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var CardImage = React.createClass({
    render: function () {
        return (
            <div className="card-text">
            {this.props.text}
            </div>
        );
    }
});

module.exports = CardImage;