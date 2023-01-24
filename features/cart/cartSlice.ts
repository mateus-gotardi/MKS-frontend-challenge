import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store';

export interface Product {
    id: string;
    price: number;
    quantity: number;
}
export interface CartState {
    cartProducts: Product[];
}

const initialState: CartState = {
    cartProducts: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.cartProducts.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload.id)
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.cartProducts

export default cartSlice.reducer