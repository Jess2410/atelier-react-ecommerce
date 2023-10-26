import { createSlice } from "@reduxjs/toolkit";
import { CardProduct } from "../components/Card";

// interface cartState {
//   cart: CardProduct[];
// }

export interface CartItem {
  id: number;
  product: CardProduct;
  quantity: number;
}

interface cartState {
  cart: CartItem[];
}
const initialState: cartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      const productIndex = state.cart.findIndex(
        (item) => item.id === productId
      );

      if (productIndex !== -1) {
        if (state.cart[productIndex].quantity > 1) {
          state.cart[productIndex].quantity -= 1;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
    },
    // addCart: (state, action) => {
    //   state.cart.push(action.payload);
    //   console.log(state.cart);
    //   return state;
    // },
    // updateTaskById: (state, action) => {
    //   const { id, title, description } = action.payload;
    //   const taskUpdated = state.cart.find((task) => task.id === id);

    //   if (taskUpdated) {
    //     taskUpdated.title = title;
    //     taskUpdated.description = description;
    //   }
    // },
    // deleteTaskById: (state, action) => {
    //   state.cart = state.cart.filter((product) => product.id !== action.payload);
    //   return state;
    // },
  },
});

export const { addCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
