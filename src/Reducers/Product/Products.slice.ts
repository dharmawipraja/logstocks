import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProductsState {
  productList: Array<any>
}

const initialState: ProductsState = {
  productList: [],
}

export const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    addProductList: (state, action) => {
      state.productList = action.payload;
    },
    removeProduct: (state, action) => {
      const filteredProduct = state.productList.filter(product => product !== action.payload)

      state.productList = filteredProduct
    },
  },
})

// Action creators are generated for each case reducer function
export const { addProductList, removeProduct } = productsSlice.actions

export default productsSlice.reducer
