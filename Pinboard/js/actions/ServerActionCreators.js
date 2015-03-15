/**
 * Created by I060307 on 15/03/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var PinBoardConstants = require('../constants/PinBoardConstants');

var ActionTypes = PinBoardConstants.ActionTypes;

module.exports = {

    receiveAll: function(rawCards) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_CARDS,
            rawCards: rawCards
        });
    },

    receiveCreatedCard: function(createdCard) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_CREATED_CARD,
            createdCard: createdCard
        });
    }
};