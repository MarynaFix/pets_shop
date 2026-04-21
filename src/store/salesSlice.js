import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSales = createAsyncThunk("sales/fetchSales", async () => {
  const response = await fetch("http://localhost:3333/products/all");
  const data = await response.json();

  return data;
});

const salesSlice = createSlice({
  name: "sales",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSales.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "success";
      })
      .addCase(fetchSales.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default salesSlice.reducer;
