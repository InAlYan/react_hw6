const { createSlice } = require("@reduxjs/toolkit");

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            {
                id: 1,
                name: "Хлеб",
                description: "Бородинский",
                price: 50,
                available: true,
            },
            {
                id: 2,
                name: "Молоко",
                description: "Белый замок",
                price: 100,
                available: true,
            },
            {
                id: 3,
                name: "Сок",
                description: "Любимый, 1л",
                price: 150,
                available: true,
            },
        ],
    },
    reducers: {
        addProduct: (state, action) => {
            if (state.products.some(product =>
                        action.payload.name === product.name &&
                        action.payload.description === product.description &&
                        action.payload.price === product.price
                )
            ) return;
            state.products.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            state.products = state.products.map(product => product.id === action.payload.id ? action.payload : product);
        },
        changeAvailabilityProduct: (state, action) => {
            state.products = state.products.map(product => product.id === action.payload ? { ...product, available: !product.available }: product);
        },
    },
});

export const {addProduct, deleteProduct, updateProduct, changeAvailabilityProduct} = productsSlice.actions;

export const productReducer = productsSlice.reducer;
