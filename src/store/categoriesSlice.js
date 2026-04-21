import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch("http://localhost:3333/categories/all");
    const data = await response.json();

    return data;
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default categoriesSlice.reducer;
