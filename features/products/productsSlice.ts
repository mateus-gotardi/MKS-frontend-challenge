import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { AllProducts } from 'interfaces'

// Define the initial state using that type
const initialState: AllProducts = {
    products: [],
    count: 0
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProducts: (state, action: PayloadAction<AllProducts>) => {
            state.products = action.payload.products
            state.count = action.payload.count
        },
        getProducts: (state) => {
            return state
        }
    },
})

export const { updateProducts, getProducts } = productsSlice.actions

export const selectProducts = (state: RootState) => state.products

export default productsSlice.reducer