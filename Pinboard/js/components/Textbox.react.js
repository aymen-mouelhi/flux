/**
 * Created by I060307 on 22/03/2015.
 */
var Colors = require('./Colors.react');
var StylePropTypes = require('./StylePropTypes.react');
var React = require('react');

var Textbox = React.createClass({
    propTypes: {
    },

    render: function() {
        return (
            <input
                style={[
                    styles.root
                ]}
            />
        );
    }
});

var styles = {
    root: {
        border: '1px solid ' + Colors.gray2,
        height: 32,
        padding: '0 4px',

        ':focus': {
            outline: 'none',
            border: 'solid 1px' + Colors.gray1,
            boxShadow: '0 0 5px 0 ' + Colors.accent
        }
    }
};

module.exports = Textbox;