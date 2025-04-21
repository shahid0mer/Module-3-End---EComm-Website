import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { value: [] }, 
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.value.find((item) => item.id === product.id);

      if (existingProduct) {
        
        existingProduct.quantity += 1;
      } else {
        
        state.value.push({ ...product, quantity: 1 });
      }
    },


  },
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;
