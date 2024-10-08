const actions = require('./bookActionTypes');
const bookAdded = ( title, author ) => {
    return {
        type: actions.BOOK_ADDED,
        payload: {
            title: title,
            author: author,
        }
    }
}
const bookRemoved = ( id ) => {
    return {
        type: actions.BOOK_REMOVED,
        payload: {
            id: id
        }
    }
}
module.exports = { bookAdded, bookRemoved };
