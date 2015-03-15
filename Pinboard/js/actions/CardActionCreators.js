/**
 * Created by I060307 on 15/03/2015.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var PinBoardConstants = require('../constants/PinBoardConstants');
/*
var ChatWebAPIUtils = require('../utils/ChatWebAPIUtils');
var ChatMessageUtils = require('../utils/ChatMessageUtils');
*/

var ActionTypes = PinBoardConstants.ActionTypes;

module.exports = {

    createCard: function(text, currentThreadID) {
        AppDispatcher.dispatch({
            type: ActionTypes.CREATE_MESSAGE,
            text: text,
            currentThreadID: currentThreadID
        });
        // Todo: Create Card
        var message = ChatMessageUtils.getCreatedMessageData(text, currentThreadID);
        ChatWebAPIUtils.createMessage(message);
    }

};