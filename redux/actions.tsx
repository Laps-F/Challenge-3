import { Action } from 'redux';
import ProductInterface from '../types/ProductInterface';

export interface AddToCartAction extends Action {
    type: 'ADD_TO_CART';
    payload: ProductInterface;
}

export const addToCart = (product: ProductInterface): AddToCartAction => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    };
};
export const removeFromCart = (productId: number) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: productId,
    };
};
