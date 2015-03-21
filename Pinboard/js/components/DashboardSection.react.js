/**
 * Created by I060307 on 15/03/2015.
 */
var React = require('react');
var CardsContainer = require('./CardsContainer.react');
var CardStore = require('../stores/CardStore');

function getStateFromStores() {
    return {
        cards: CardStore.getAll()
    };
}

var Dashboard = React.createClass({


    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        //this._scrollToBottom();
        CardStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        CardStore.removeChangeListener(this._onChange);
    },
    render: function () {
        var navStyle = {
            "margin-top": "55px"
        };
        return (
            <div className="dashboard" style={navStyle}>
                <CardsContainer data={this.state.cards} />
            </div>
        );
    }
});

module.exports = Dashboard;