const { produce } = require('immer');

const book = {
    title: 'PHP and Apache'
};

const publishTheBook = (theBook) => {
    return produce(theBook, draftBook => {
        draftBook.isPublished = true;
    });
}
const publishedBook = publishTheBook(book);
console.log(book);
console.log(publishedBook);

