/**
 * Created by I060307 on 15/03/2015.
 */

var React = require('react');
var Card = require('./Card.react');

var CardsContainer = React.createClass({
    render: function () {
        //var jsonData = JSON.parse(this.props.data);
        var cardsArray = new Array();
        for(var i in this.props.data){
            var card = this.props.data[i];
            cardsArray.push(card);
        }
        var cardNodes = cardsArray.map(function (card) {
            return (
                <Card username={card.user.username} category={card.category.icon} >
                    {card.text}
                </Card>
            );
        });
        return (
            <div className="cardsContainer">
        {cardNodes}
            </div>
        );
    }
});


module.exports = CardsContainer;