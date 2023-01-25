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
            const product = state.cartProducts.find((product) => product.id === action.payload.id)
            if (product) {
                product.quantity = product.quantity ? product.quantity + 1 : 1
            }
            else {
                let productToAdd = action.payload
                productToAdd.quantity = 1
                state.cartProducts.push(productToAdd)
            }
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            let product = state.cartProducts.find((product) => product.id === action.payload.id)
            if (product) {
                if (product.quantity && product.quantity > 1) {
                    product.quantity = product.quantity - 1
                }
                else {
                    state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload.id)
                }
            }
        },
        getCart: (state) => {
            return state
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.cartProducts

export default cartSlice.reducer