import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Products } from "../../pages";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await fetch(`https://dummyjson.com/products/`);
        const data = await res.json();
        return data.products.map((product) => ({
            ...product,
            price: Math.ceil(product.price),
        }));
    },
);

export const fetchSingleProduct = createAsyncThunk(
    "products/fetchSingleProduct",
    async (id) => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        return { ...data, price: Math.ceil(data.price) };
    },
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        filteredProducts: [],
        limitedProducts: [],
        selectedProduct: {
            product: null,
            quantity: 1,
        },
        page: 1,
        skip: 0,
        totalPages: 0,
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
            if (action.payload === "dec" && state.page > 1) {
                state.page -= 1;
            }

            if (action.payload === "inc") {
                state.page += 1;
            }
        },
        finalProducts: (state) => {
            const limit = 8;
            const start = limit * (state.page - 1);

            state.limitedProducts = state.filteredProducts.slice(
                start,
                start + limit,
            );
            console.log(state.limitedProducts);
            console.log(state.page, state.totalPages);
            console.log("------------");
        },
        applyFilters: (state, action) => {
            const { category, company, price, sort, searchText } =
                action.payload;

            let filtered = state.products;

            if (searchText) {
                filtered = filtered.filter((item) =>
                    item.title.startsWith(searchText),
                );
            }

            if (category) {
                filtered = filtered.filter(
                    (item) => item.category === category,
                );
            }

            if (company) {
                filtered = filtered.filter((item) => item.brand === company);
            }

            if (price) {
                filtered = filtered.filter((item) => item.price < price);
            }

            if (sort === "lth") {
                filtered = [...filtered].sort((a, b) => a.price - b.price);
            }

            if (sort === "htl") {
                filtered = [...filtered].sort((a, b) => b.price - a.price);
            }

            state.filteredProducts = filtered;
            state.totalPages = Math.ceil(state.filteredProducts.length / 8);
            state.page = 1;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.filteredProducts = action.payload;
                state.products = action.payload;
                state.totalPages = Math.ceil(state.filteredProducts.length / 8);
                state.loading = false;
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

export const {
    increaseQty,
    decreaseQty,
    changePage,
    applyFilters,
    finalProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
