/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var CardHeader = require('./CardHeader.react');
var CardText = require('./CardText.react');
var CardDetails = require('./CardDetails.react');

// Todo: Use Polymer Card + Avatar
var Card = React.createClass({
    render: function () {
        //var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="card">
                <div className="content">
                    <CardHeader username={this.props.username} category={this.props.category} />
                    <CardText text={this.props.children.toString()} />
                    <CardDetails />
                </div>
            </div>
        );
    }
});

module.exports = Card;