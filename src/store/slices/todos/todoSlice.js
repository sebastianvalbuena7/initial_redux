import { createSlice } from '@reduxjs/toolkit';

export const TodoSlice = createSlice({
    name: 'name',
    initialState: {
        counter: 10
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
});

export const { increment } = TodoSlice.actions;