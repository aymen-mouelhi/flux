/**
 * Created by I060307 on 22/03/2015.
 */

var Colors = require('./Colors.react');
var React = require('react');
var StylePropTypes = require('./StylePropTypes.react');
var PropTypes = React.PropTypes;

var Button = React.createClass({
    propTypes: {
        onClick: PropTypes.func,
        use: PropTypes.oneOf(['default', 'special'])
    },

    getDefaultProps: function() {
        return {
            use: 'default'
        };
    },

    _onClick: function() {
        this.props.onClick && this.props.onClick();
    },

    render: function() {
        return (
            <button
                type="button"
                style={[
                    styles.root,
                    (this.props.use === 'default') && styles.default,
                    (this.props.use === 'special') && styles.special
                ]}
                onClick={this._onClick}>
        {this.props.children}
            </button>
        );
    }
});

var styles = {
    root: {
        border: 'none',
        borderRadius: '2px',
        cursor: 'pointer',
        lineHeight: '30px',
        margin: 0,
        padding: '1px 16px',
        verticalAlign: 'top',

        ':active': {
            padding: '2px 15px 0 17px'
        }
    },

    default: {
        background: Colors.gray1,
        color: Colors.black,

        ':hover': {
            background: Colors.gray1.darken(5)
        }
    },

    special: {
        background: Colors.accent,
        color: Colors.white,

        ':hover': {
            background: Colors.accent.darken(5)
        }
    }
};

module.exports = Button;