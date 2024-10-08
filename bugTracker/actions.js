// const { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } = require('./actionTypes');
const actions = require('./actionTypes');
// const actions = {
//     BUG_ADDED: BUG_ADDED,
//     BUG_REMOVED: BUG_REMOVED,
//     BUG_RESOLVED: BUG_RESOLVED,
// };
const bugAdded = (description) => {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    }
}
const bugRemoved = (description) => {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: 1
        }
    }
}
const bugResolved = (id) => {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id
        }
    }
}
module.exports = { bugAdded, bugRemoved, bugResolved };
