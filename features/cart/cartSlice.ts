import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store';
import { CartProducts, Product } from 'interfaces';

const initialState: CartProducts = {
    cartProducts: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            let index = state.cartProducts.findIndex((product) => product.id === action.payload.id)
            if (index !== -1) {
                console.log('produto no carrinho')
            }
            else {
                state.cartProducts.push(action.payload)
            }

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