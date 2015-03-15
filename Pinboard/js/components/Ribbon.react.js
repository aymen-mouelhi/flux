/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var Ribbon = React.createClass({
    render: function() {
        return (
            <div className="ribbon">
                <a target="_blank" href="#">
                    <img src={this.props.image} />
                </a>
            </div>
        );
    }
});
module.exports = Ribbon;