let lastId = 0;
const actions = require('./bookActionTypes');
const bookReducer = (state = [], action) => {
    switch ( action.type ) {
        case actions.BOOK_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    title: action.payload.title,
                    author: action.payload.author
                }
            ]
        case actions.BOOK_REMOVED:
            return state.filter( book => book.id !== action.payload.id)
        default:
            return state;
    }

    // if ( action.type !== actions.BOOK_ADDED )
    // {
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             title: action.payload.title,
    //             author: action.payload.author
    //         }
    //     ]
    // }
    // return state;
}

module.exports = bookReducer;