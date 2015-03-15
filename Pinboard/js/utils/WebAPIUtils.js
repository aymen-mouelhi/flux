/**
 * Created by I060307 on 15/03/2015.
 */
var ServerActionCreators = require('../actions/ServerActionCreators');

// !!! Please Note !!!
// We are using localStorage as an example, but in a real-world scenario, this
// would involve XMLHttpRequest, or perhaps a newer client-server protocol.
// The function signatures below might be similar to what you would build, but
// the contents of the functions are just trying to simulate client-server
// communication and server-side processing.

module.exports = {

    getAllCards: function() {
        // simulate retrieving data from a database
        var rawCards = JSON.parse(localStorage.getItem('cards'));

        // simulate success callback
        ServerActionCreators.receiveAll(rawCards);
    },
    // Todo: Update Code to create a new card
    createCard: function(message, threadName) {
        // simulate writing to a database
        var rawCards = JSON.parse(localStorage.getItem('cards'));
        var timestamp = Date.now();
        var id = 'm_' + timestamp;
        var threadID = message.threadID || ('t_' + Date.now());
        var createdCard = {
            id: id,
            threadID: threadID,
            threadName: threadName,
            authorName: message.authorName,
            text: message.text,
            timestamp: timestamp
        };
        // Add new message to the list of messages
        rawCards.push(createdCard);
        // Store list of messages in local storage
        localStorage.setItem('cards', JSON.stringify(rawCards));

        // simulate success callback
        setTimeout(function() {
            ServerActionCreators.receiveCreatedCard(createdCard);
        }, 0);
    }

};