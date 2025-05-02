import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProductThunk = createAsyncThunk('products/fetch', async () => {
    const res = await axios.get('http://localhost:5000/products')
    return res.data
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getProductThunk.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(getProductThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export default productSlice.reducer
