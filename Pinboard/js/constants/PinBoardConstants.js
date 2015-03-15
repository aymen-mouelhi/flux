/**
 * Created by I060307 on 15/03/2015.
 */
var keyMirror = require('keymirror');

module.exports = {

    ActionTypes: keyMirror({
        CLICK_CARD: null,
        CREATE_CARD: null,
        RECEIVE_RAW_CREATED_CARD: null,
        RECEIVE_RAW_CARDS: null
    })
};