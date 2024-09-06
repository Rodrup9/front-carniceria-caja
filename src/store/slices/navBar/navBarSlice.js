import { createSlice } from '@reduxjs/toolkit';

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState: {
        state: true
    },
    reducers: {
        toggle: ( state ) => {
            state.state = !state.state
        },
    }
});

export const { toggle } = navBarSlice.actions;