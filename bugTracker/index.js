const store = require('./store');
const { bugAdded, bugResolved } = require('./actions');

const bookStore = require('../bookStore/bookStore');
const { bookAdded } = require("../bookStore/bookActions");
bookStore.dispatch(bookAdded( 'book title', 'RoZa' ));


store.dispatch(bugAdded('First bug'));
store.dispatch(bugResolved(1));

// const unsubscribe = store.subscribe(() => {
//     console.log('Store changed', store.getState());
// })
// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: 'Bug 1'
//     }
// });
// unsubscribe();
// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })
console.log(store.getState());
console.log(bookStore.getState());

