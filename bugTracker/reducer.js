let lastId = 0;
// const { BUG_ADDED, BUG_REMOVED } = require('./actionTypes');
// const actions = {
//     BUG_ADDED: BUG_ADDED,
//     BUG_REMOVED: BUG_REMOVED,
// };
const actions = require('./actionTypes');

const reducer = ( state = [], action ) => {
    switch ( action.type ) {
        // case 'bugAdded':
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case actions.BUG_REMOVED:
            return state.filter( bug => bug.id !== action.payload.id)
        case actions.BUG_RESOLVED:
            return state.map( bug =>
                bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
            )
        default:
            return state;
    }

    if ( action.type === actions.BUG_ADDED )
    {
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    }
    else if ( action.type === actions.BUG_REMOVED )
    {
        return state.filter( bug => bug.id !== action.payload.id)
    }
    return state;
}
module.exports = reducer;