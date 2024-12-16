import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// create a slice...
const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItems = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItems) {
        state.cartItems.push(action.payload);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added to cart",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          title: "Item already exists",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ok!",
        });
      }
    },
    removeFromCart: (state, action)=>{
        state.cartItems = state.cartItems.filter((item)=>item._id !== action.payload._id);
    },
    clearCart: (state)=>{
        state.cartItems = [];
    }
  },
});

// export slice...
export const { addToCart, removeFromCart, clearCart} = CartSlice.actions;

export default CartSlice.reducer;
