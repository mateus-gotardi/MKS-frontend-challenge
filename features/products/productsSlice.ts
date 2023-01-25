import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'
import { AllProducts } from 'interfaces'

// Define the initial state using that type
const initialState: AllProducts = {
    products: [],
    count: 0
}

export const counterSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        updateProducts: (state, action: PayloadAction<AllProducts>) => {
            state.products = action.payload.products
            state.count = action.payload.count
        },
    },
})

export const { updateProducts } = counterSlice.actions

export const selectProducts = (state: RootState) => state.products

export default counterSlice.reducer