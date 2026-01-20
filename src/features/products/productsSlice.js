import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (page) => {
        const limit = 8;
        const res = await fetch(
            `https://dummyjson.com/products?limit=8&skip=${limit * page}`,
        );
        const data = await res.json();
        return data.products;
    },
);

export const fetchSingleProduct = createAsyncThunk(
    "products/fetchSingleProduct",
    async (id) => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        return data;
    },
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        selectedProduct: {
            product: null,
            quantity: 1,
        },
        page: 0,
        loading: false,
        error: null,
    },
    reducers: {
        increaseQty: (state) => {
            state.selectedProduct.quantity += 1;
        },

        decreaseQty: (state) => {
            state.selectedProduct.quantity -= 1;
        },
        changePage: (state, action) => {
            action.payload === "inc" ? (state.page += 1) : (state.page -= 1);
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchSingleProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = {
                    product: action.payload,
                    quantity: 1,
                };
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { increaseQty, decreaseQty, changePage } = productsSlice.actions;
export default productsSlice.reducer;
