import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import ProductInterface from '../types/ProductInterface';
//import { removeFromCart } from './actions';

export interface CartState {
    cartItems: ProductInterface[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartSlice: Slice<CartState> = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductInterface>) => {
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const productId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== productId);
          },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
