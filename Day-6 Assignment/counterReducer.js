export default counterReducer = (state={count:0}, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state, count: state.count + 1
            };
        case 'REMOVE':
            return {
                ...state, count: state.count4 - 1
            };
        default:
            return state;
    }
}
