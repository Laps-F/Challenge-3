import { Reducer } from 'redux';
import ProductInterface from '../types/ProductInterface';

export interface CartState {
    cartItems: ProductInterface[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartReducer: Reducer<CartState> = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        default:
            return state;
    }
};

export default cartReducer;
