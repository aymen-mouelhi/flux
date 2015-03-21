/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var SearchSection = React.createClass({
    render: function () {
        return (
            <form>
                <Input type="text" buttonAfter={<Button>Search</Button>} />
            </form>
        );
    }
});

module.exports = SearchSection;