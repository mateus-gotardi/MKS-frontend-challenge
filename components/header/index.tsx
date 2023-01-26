import React from 'react';
import { HeaderContainer } from './styles';
import { colors, Cart } from '..';
import CartIcon from './cartIcon';
import { useSelector } from 'react-redux'
import { selectCart } from "../../features/cart/cartSlice";

const Header = () => {
    const [showCart, setShowCart] = React.useState(false);
    const cart = useSelector(selectCart)
    let quantitycheck = ()=>{
        let sum = 0;
        cart.map((item)=>{
            sum += item.quantity;
        })
        return sum;
    }
    const quantity= quantitycheck();
    return (
        <HeaderContainer colors={colors}>
            <h1 className='logo'><span className='mks'>MKS</span><span className='sistemas'>Sistemas</span></h1>
            {!showCart && <CartIcon setShowCart={setShowCart} showCart={showCart} quantity={quantity}/>}
            {showCart && <Cart setShowCart={setShowCart} showCart={showCart}/>}
        </HeaderContainer>
    )
}
export default Header;