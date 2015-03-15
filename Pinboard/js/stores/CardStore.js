/**
 * Created by I060307 on 15/03/2015.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var PinConstants = require('../constants/PinBoardConstants');
var CardUtils = require('../utils/CardUtils');
var EventEmitter = require('events').EventEmitter;
var CategoryStore = require('../stores/CategoryStore');
var assign = require('object-assign');

var ActionTypes = PinConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _cards = {};

function _addCards(rawCards) {
    rawCards.forEach(function(card) {
        if (!_cards[card.id]) {
            // Todo: Not sure category is needed here
            // Todo: No need to convert anything for this use case
            /*
            _cards[card.id] = CardUtils.convertRawMessage(
                card,
                CategoryStore.getCurrentID()
            );
            */

            _cards[card.id] = card;
        }
    });
}

function _markAllInThreadRead(categoryID) {
    for (var id in _cards) {
        if (_cards[id].categoryID === categoryID) {
            _cards[id].isRead = true;
        }
    }
}

var CardStore = assign({}, EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    get: function(id) {
        return _cards[id];
    },

    getAll: function() {
        return _cards;
    },

    /**
     * @param {string} categoryID
     */
    getAllForCategory: function(categoryID) {
        var categoryCards = [];
        for (var id in _cards) {
            if (_cards[id].categoryID === categoryID) {
                categoryCards.push(_cards[id]);
            }
        }
        categoryCards.sort(function(a, b) {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        return categoryCards;
    },

    getAllForCurrentCategory: function() {
        return this.getAllForCategory(CategoryStore.getCurrentID());
    },

    getAllCardsForLocation: function(location){

    }

});

CardStore.dispatchToken = AppDispatcher.register(function(action) {

    switch(action.type) {

        case ActionTypes.CLICK_THREAD:
            AppDispatcher.waitFor([CategoryStore.dispatchToken]);
            _markAllInThreadRead(CategoryStore.getCurrentID());
            CardStore.emitChange();
            break;

        case ActionTypes.CREATE_MESSAGE:
            var message = ChatMessageUtils.getCreatedMessageData(
                action.text,
                action.currentThreadID
            );
            _cards[message.id] = message;
            CardStore.emitChange();
            break;

        case ActionTypes.RECEIVE_RAW_CARDS:
            _addCards(action.rawCards);
            // Todo: needed only in case we need that category store do something
            //AppDispatcher.waitFor([CategoryStore.dispatchToken]);
            CardStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = CardStore;