import { useSelector, useDispatch } from 'react-redux'
import { updateProducts, selectProducts } from '../features/products/productsSlice'
import { addProduct, removeProduct, selectCart } from "../features/cart/cartSlice"

describe('test redux state', () => {
    const cart = useSelector(selectCart)
    const allProducts = useSelector(selectProducts)
    const dispatch = useDispatch()
    it('should change products state', () => {
        dispatch(updateProducts({
            products: [
                {
                    id: 1,
                    name: 'test',
                    brand: 'test',
                    description: 'test',
                    price: 0,
                    photo: 'test',
                }
            ], count: 0
        }))
        expect(allProducts).toEqual({
            products: [
                {
                    id: 1,
                    name: 'test',
                    brand: 'test',
                    description: 'test',
                    price: 0,
                    photo: 'test',
                }
            ], count: 0
        })
    })
})