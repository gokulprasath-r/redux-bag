import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        count: 0,
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(state.cartItems);
            const item = action.payload.product;
            const existingItem = state.cartItems.find(
                (x) => x.product.id === item.id
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.cartItems.push({
                    product: item,
                    quantity: action.payload.quantity,
                    amount: item.price,
                });
            }

            state.count = state.cartItems.length;
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (x) => x.product.id !== action.payload
            );

            state.count = state.cartItems.length;
        },

        increaseQty: (state, action) => {
            const item = state.cartItems.find(
                (x) => x.product.id === action.payload
            );
            if (item) {
                item.quantity += 1;
                item.amount = item.product.price * item.quantity;
            }
        },

        decreaseQty: (state, action) => {
            const item = state.cartItems.find(
                (x) => x.product.id === action.payload
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.amount = item.product.price * item.quantity;
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.count = 0;
            state.total=0;
        },

        calculateTotal: (state) => {
            state.total = state.cartItems.reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
            );
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    calculateTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
