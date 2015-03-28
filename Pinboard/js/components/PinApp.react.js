/**
 * Created by I060307 on 15/03/2015.
 */
var HeaderSection = require('./HeaderSection.react');
var SearchSection = require('./SearchSection.react');
var SearchBox = require('./SearchBox.react');
var React = require('react');
var DashboardSection = require('./DashboardSection.react');

var PAGE_SIZE = 20;

var styles = {
    search: {
        marginLeft: '12px'
    }
};

var PinApp = React.createClass({
    getInitialState: function() {
        return {
            maxResultCount: PAGE_SIZE,
            query: 'in:inbox',
            queryProgress: 'Search'
        };
    },
    _onQueryChange: function(query) {
        this.setState({
            queryProgress: query,
            maxResultCount: PAGE_SIZE
        });
    },
    _onQuerySubmit: function(query) {
        this.setState({
            query: query,
            queryProgress: query,
            maxResultCount: PAGE_SIZE
        });
    },
    render: function () {
        return (
            <div>
                <HeaderSection/>
                <DashboardSection />
            </div>
        );
    }
});

module.exports = PinApp;

/*
 <SearchBox
 style={styles.search}
 query={this.state.queryProgress}
 onQueryChange={this._onQueryChange}
 onQuerySubmit={this._onQuerySubmit}
 />
 */