/**
 * Created by I060307 on 22/03/2015.
 */
var Button = require('./Button.react');
var Colors = require('./Colors.react');
var Textbox = require('./Textbox.react');
var React = require('react');

var PropTypes = React.PropTypes;

var SearchBox = React.createClass({
    propTypes: {
        onQueryChange: PropTypes.func.isRequired,
        onQuerySubmit: PropTypes.func.isRequired,
        query: PropTypes.string.isRequired
    },

    _onQueryKeyDown: function(e) {
        if (e.key === 'Enter') {
            this.props.onQuerySubmit(this.props.query);
        }
    },

    _onQueryChange: function(e) {
        this.props.onQueryChange(e.target.value);
    },

    _onSearchClick: function() {
        this.props.onQuerySubmit(this.props.query);
    },

    render: function() {
        return (
            <span style={this.props.style}>
                <Textbox
                    style={styles.input}
                    value={this.props.query}
                    onChange={this._onQueryChange}
                    onKeyDown={this._onQueryKeyDown}
                    type="search"
                />
                <Button
                    onClick={this._onSearchClick}
                    use="special">
                    Search
                </Button>
            </span>
        );
    }
});

var styles = {
    input: {
        marginRight: '8px',
        width: '400px'
    }
};

module.exports = SearchBox;