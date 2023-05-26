import { Reducer } from 'redux';
import ProductInterface from '../types/ProductInterface';

export interface CartState {
    cartItems: ProductInterface[];
}