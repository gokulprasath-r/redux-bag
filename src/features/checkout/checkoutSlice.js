import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("checkout/fetchUsers", async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    const modData = data.map((user) => {
        return {
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            address: `${user.location.city}, ${user.location.country}`,
            totalPrice: user.age + 100,
            totalItems: Math.floor(Math.random() * 5) + 1,
            date: new Date(Date.now() - user.id * 86400000).toISOString(),
        };
    });
    return modData;
});

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        users: [],
        name: null,
        address: null,
        totalPrice: 0,
        totalItems: 0,
        loading: false,
        error: null,
    },

    reducers: {
        placeOrder: (state, action) => {
            state.users.push({
                id: state.users.length + 1,
                name: action.payload.name,
                address: action.payload.address,
                totalPrice: action.payload.totalPrice,
                totalItems: action.payload.totalItems,
                date: action.payload.date,
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { placeOrder } = checkoutSlice.actions;

export default checkoutSlice.reducer;
