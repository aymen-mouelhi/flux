/**
 * Created by I060307 on 15/03/2015.
 */
var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');

var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

    clickThread: function(threadID) {
        ChatAppDispatcher.dispatch({
            type: ActionTypes.CLICK_THREAD,
            threadID: threadID
        });
    }

};