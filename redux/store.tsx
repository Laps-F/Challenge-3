import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers';

export type Store = ReturnType<typeof store.getState>
export type Thunk = ThunkAction<void, Store, undefined, Action<string>>
export type Dispatch = typeof store.dispatch

const reducer = {
    cart: cartReducer
}

export const store = configureStore({
    reducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})