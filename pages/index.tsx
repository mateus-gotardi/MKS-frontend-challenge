import { Header, ProductsDisplay, Footer } from "../components"
import { useDispatch } from 'react-redux'
import { mksAPI } from 'apiConfig'
import { updateProducts } from '../features/products/productsSlice'
export default function Home(props:any) {
  const dispatch = useDispatch()
  dispatch(updateProducts(props))

  return (
    <>
      <Header />
      <ProductsDisplay/>
      <Footer />
    </>
  )
}
Home.getInitialProps = async () => {
  const params = {
    page: 1,
    rows: 8,
    sortBy: 'id',
    orderBy: 'DESC'
  };
  const response = await mksAPI.get('/products', { params });
  return response.data;
}
