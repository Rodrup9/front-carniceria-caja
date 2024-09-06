import { configureStore } from '@reduxjs/toolkit';
import { orderSlice } from './slices/orders';
import { navBarSlice } from './slices/navBar';

export const store = configureStore({
    reducer: {
        orders: orderSlice.reducer,
        navBar: navBarSlice.reducer,
    }
})