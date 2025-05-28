import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"; //HTTP 요청 라이브러리리
 
// 비동기 액션 정의하기 createAsyncThunk
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios.get("http://127.0.0.1:8000/api/products/");
    return data;
  }
);
 
// 
export const getProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async (id) => {
    const { data } = await axios.get(
      `http://127.0.0.1:8000/api/products/${id}`
    );
    return data;
  }
);
 
// 초기상태 정의하기기
const initialState = {
  isLoading: false, // 로딩중 표시
  isError: false, // 에러 발생 여부
  error: "", // 에러 메세지
  success: false, // 성공 여부
  products: [], // 상품 리스트 데이터
  product: {}, // 단일 상품 상세 데이터
};
 
const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get all products
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.success = true;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.error = "Request failed with status code 404!";
    });
 
    // Get product details
    builder.addCase(getProductDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    });
    builder.addCase(getProductDetails.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      state.error = "Request failed with status code 404!";
    });
  },
});
 
export default productsSlice.reducer;