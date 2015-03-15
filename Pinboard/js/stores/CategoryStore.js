/**
 * Created by I060307 on 15/03/2015.
 */
/**
 * Created by I060307 on 15/03/2015.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PinConstants = require('../constants/PinBoardConstants');

//var ChatMessageUtils = require('../utils/ChatMessageUtils');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = PinConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _currentID = null;
var _cards = {};

var CategoryStore = assign({}, EventEmitter.prototype, {

    // Todo: is this needed?
    init: function(rawCards) {
        /*
        rawCards.forEach(function(card) {
            //var threadID = message.threadID;
            var category = card.category;

            var thread = _cards[threadID];
            if (thread && thread.lastTimestamp > message.timestamp) {
                return;
            }
            _threads[threadID] = {
                id: threadID,
                name: message.threadName,
                lastMessage: ChatMessageUtils.convertRawMessage(message, _currentID)
            };
        }, this);

        if (!_currentID) {
            var allChrono = this.getAllChrono();
            _currentID = allChrono[allChrono.length - 1].id;
        }

        _threads[_currentID].lastMessage.isRead = true;
        */
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
     * @param {string} id
     */
    get: function(id) {
        return _cards[id];
    },

    getAll: function() {
        return _cards;
    },

    getAllChrono: function() {
        var orderedCards = [];
        for (var id in _cards) {
            var card = _cards[id];
            orderedCards.push(card);
        }
        orderedCards.sort(function(a, b) {
            // Todo: Add Timestamp to cards
            if (a.timestamp < b.timestamp) {
                return -1;
            } else if (a.timestamp > b.timestamp) {
                return 1;
            }
            return 0;
        });
        return orderedCards;
    },

    getCurrentID: function() {
        return _currentID;
    },

    getCurrent: function() {
        return this.get(this.getCurrentID());
    }

});

CategoryStore.dispatchToken = AppDispatcher.register(function(action) {

    switch(action.type) {

        case ActionTypes.CLICK_THREAD:
            // Todo: Update Current Action
            _currentID = action.threadID;
            _cards[_currentID].lastMessage.isRead = true;
            CategoryStore.emitChange();
            break;

        case ActionTypes.RECEIVE_RAW_CARDS:
            CategoryStore.init(action.rawCards);
            CategoryStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = CategoryStore;