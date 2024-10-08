const { createStore } =
    require("redux");
const bookReducer = require("./bookReducer");
const bookStore = createStore(bookReducer);
module.exports = bookStore;
