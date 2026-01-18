import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "cart",
    initialState: {
        details: [],
        name: null,
        address: null,
        totalPrice: 0,
        totalItems: 0,
    },
    reducers: {
        placeOrder: (state, action) => {
            state.details.push({
                name: action.payload.name,
                address: action.payload.address,
                totalPrice: action.payload.totalPrice,
                totalItems: action.payload.totalItems,
                date: action.payload.date,
            });
        },
    },
});

export const { placeOrder } = checkoutSlice.actions;

export default checkoutSlice.reducer;
