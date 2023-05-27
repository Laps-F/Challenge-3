import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import ProductInterface from '../types/ProductInterface';

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
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
