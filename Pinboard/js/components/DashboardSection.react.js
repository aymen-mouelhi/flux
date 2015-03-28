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
            // "margin-top": "55px"
        };
        return (
            <div id="page-content-wrapper" className="col-md-8">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12" style={navStyle}>
                            <CardsContainer data={this.state.cards} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Dashboard;