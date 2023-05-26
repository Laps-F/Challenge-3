import { Action } from 'redux';
import ProductInterface from '../types/ProductInterface';

export interface AddToCartAction extends Action {
    type: 'ADD_TO_CART';
    payload: ProductInterface;
}
  