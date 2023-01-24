import { Header } from "../components"
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct, selectCart } from "features/cart/cartSlice"

export default function Home() {

  const cart = useSelector(selectCart)
  const dispatch = useDispatch()
  
  return (
    <>
      <Header />
    </>
  )
}
