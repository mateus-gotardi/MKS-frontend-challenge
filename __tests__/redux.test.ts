import { productsSlice } from '../features/products/productsSlice'
import { cartSlice } from '../features/cart/cartSlice'

describe('test redux products state', () => {

    it('should return products State', () => {
        const productsState = productsSlice.reducer(undefined, productsSlice.actions.getProducts())
        expect(productsState).toEqual({ products: [], count: 0 })
    })
    it('should update products State', () => {
        const productsState = productsSlice.reducer(undefined, productsSlice.actions.updateProducts({ products: [{ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' },{ id: 2, name: 'test2', brand: 'test2', description: 'test2', price: 1, photo: 'test2' }], count: 2 }))
        expect(productsState).toEqual({ products: [{ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' },{ id: 2, name: 'test2', brand: 'test2', description: 'test2', price: 1, photo: 'test2' }], count: 2 })
        expect(productsState.products.length).toEqual(productsState.count)
    })
})

describe('test redux cart state', () => {
    it('should return cartState', () => {
        const cartState = cartSlice.reducer(undefined, cartSlice.actions.getCart())
        expect(cartState).toEqual({ cartProducts: [] })
    })
    it('should add new product to cart', () => {
        const cartState = cartSlice.reducer(undefined, cartSlice.actions.addProduct({ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' }))
        expect(cartState).toEqual({ cartProducts: [{ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test', quantity: 1 }] })
    })
    it('should add quantity to existing product', () => {
        let cartState = cartSlice.reducer(undefined, cartSlice.actions.getCart())
        cartState = cartSlice.reducer(cartState, cartSlice.actions.addProduct({ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' }))
        cartState = cartSlice.reducer(cartState, cartSlice.actions.addProduct({ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' }))
        expect(cartState).toEqual({ cartProducts: [{ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test', quantity: 2 }] })
    })
    it('should remove product from cart', () => {
        let cartState = cartSlice.reducer(undefined, cartSlice.actions.addProduct({ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' }))
        cartState = cartSlice.reducer(cartState, cartSlice.actions.removeProduct({ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' }))
        expect(cartState).toEqual({ cartProducts: [] })
    })
    it('should remove quantity of a product from cart', () => {
        let cartState = cartSlice.reducer(undefined, cartSlice.actions.getCart())
        cartState = cartSlice.reducer(cartState, cartSlice.actions.addProduct({ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' }))
        cartState = cartSlice.reducer(cartState, cartSlice.actions.addProduct({ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' }))
        cartState = cartSlice.reducer(cartState, cartSlice.actions.removeProduct({ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test' }))
        expect(cartState).toEqual({ cartProducts: [{ id: 1, name: 'test', brand: 'test', description: 'test', price: 1, photo: 'test', quantity: 1 }] })
    })
})