import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 10,
    times: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        incrementByArgument: (state, action) => {
            state.counter += action.payload
        }
    },
})

export const { increment, decrement, incrementByArgument } = counterSlice.actions

export default counterSlice.reducer