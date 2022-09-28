import { createSlice } from "@reduxjs/toolkit";
import _ from 'lodash';

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {
      items: [],
      total: 0
    }
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.items.push(action.payload);
      const total = _.sumBy(state.cart.items, (i) => {
        return i.price;
      })
      state.cart.total = total;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      _.remove(state.cart.items, { id: id })
      const total = _.sumBy(state.cart.items, (i) => {
        return i.price;
      })
      state.cart.total = total;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
