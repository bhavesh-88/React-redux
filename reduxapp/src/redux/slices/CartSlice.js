import { createSlice, createSelector } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
    },
})

export const getItemsSelector = createSelector(
    (state)=> state.cart,
    (state)=> state
)

export const { addItem } = CartSlice.actions;

export default CartSlice.reducer