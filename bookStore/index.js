const bookStore = require('./bookStore');
const { bookAdded, bookRemoved } = require('./bookActions');

bookStore.dispatch(bookAdded( 'book title', 'RoZa' ));
bookStore.dispatch(bookAdded( 'Another book title', 'Emanuel Cunt' ));
bookStore.dispatch(bookRemoved(1));

console.log(bookStore.getState());