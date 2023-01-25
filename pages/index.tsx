import { Header } from "../components"
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct, selectCart } from "features/cart/cartSlice"
import { mksAPI } from 'apiConfig'
import { updateProducts, selectProducts } from '../features/products/productsSlice'
export default function Home() {

  const cart = useSelector(selectCart)
  
  const allProducts = useSelector(selectProducts)

  return (
    <>
      <Header />
    </>
  )
}
Home.getInitialProps = async () => {
  const dispatch = useDispatch()
  const params = {
    page: 1,
    rows: 8,
    sortBy: 'id',
    orderBy: 'DESC'
  };
  const response = await mksAPI.get('/products', { params });
  dispatch(updateProducts(response.data))
  return response.data;
}
