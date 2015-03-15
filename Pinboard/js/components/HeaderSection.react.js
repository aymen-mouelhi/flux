/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var HeaderSection = React.createClass({
    render: function () {
        return (
            <div id="navigation">
                <a href="#">Home</a>
                <a href="#">Porfolio</a>
                <a href="#">Apps</a>
                <a href="#">Login</a>
                <a href="#">About</a>
            </div>
        );
    }
});

module.exports = HeaderSection;