import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/products';

export const getCategoryThunk = createAsyncThunk('category/get', async () => {
    const res = await axios.get(BASE_URL);
    return res.data;
});

export const postCategoryThunk = createAsyncThunk('category/post', async (newCategory) => {
    const res = await axios.post(BASE_URL, newCategory);
    return res.data;
});

export const deleteCategoryThunk = createAsyncThunk('category/delete', async (_id) => {
    await axios.delete(`${BASE_URL}/${_id}`);
    return _id;
});

export const updateCategoryThunk = createAsyncThunk('category/update', async ({ _id, updatedData }) => {
    const res = await axios.put(`${BASE_URL}/${_id}`, updatedData);
    return res.data; // updated product directly
});

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCategoryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCategoryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(postCategoryThunk.fulfilled, (state, action) => {
                state.categories.push(action.payload);
            })
            .addCase(deleteCategoryThunk.fulfilled, (state, action) => {
                state.categories = state.categories.filter(item => item._id !== action.payload);
            })
            .addCase(updateCategoryThunk.fulfilled, (state, action) => {
                const index = state.categories.findIndex(item => item._id === action.payload._id);
                if (index !== -1) {
                    state.categories[index] = action.payload;
                }
            });
    },
});

export default dashboardSlice.reducer;
