import { legacy_createStore as createStore } from "redux";

const reducer = (state = { itemCount: 0 }, action) => {
    action.type = action.type.toUpperCase();
    switch (action.type) {
        case 'ADD':
            return {
                ...state, itemCount: state.itemCount + 1
            };
        case 'REMOVE':
            return {
                ...state, itemCount: state.itemCount > 0 ? state.itemCount - 1 : 0
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
