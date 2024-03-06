import { combineReducers } from "redux";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actions";

const initialProductState = {
    products:[
        {pid:101, pname:"Product 1", price: 10, qty:2},
        {pid:102, pname:"Product 2", price: 20, qty:3},
        {pid:103, pname:"Product 3", price: 30, qty:4},
        {pid:104, pname:"Product 4", price: 40, qty:5}
    ],
};

const productsReducer = (state=initialProductState, action)=>{
    switch (action.type) {
        default:
            return state;
    }
};

const initialCartState = {
    items:[],
};

const cartReducer = (state=initialCartState, action)=>{
    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state, items:[...state.items, action.payload],
            };
        case REMOVE_FROM_CART:
            return{
                ...state, items: state.items.filter((item)=> item.pid !== action.payload),
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    products: productsReducer, 
    cart:cartReducer,
});

export default rootReducer;