const { Map } = require('immutable');

let book = { title: 'Animal farm' };
const publish = (theBook) => {
    theBook.published = true;
}
// publish(book);
// console.log(book);

let mappedBook = Map({ title: 'Animal farm' });
const mapPublish = (theBook) => {
    return theBook.set('isPublished', true);
}
mappedBook = mapPublish(mappedBook);
// console.log(mappedBook);
// console.log(mappedBook.get('title'));
console.log(mappedBook.toJS());

