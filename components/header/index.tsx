import React from 'react';
import { HeaderContainer } from './styles';
import { colors } from '..';
import CartIcon from './cartIcon';

const Header = () => {
    const [showCart, setShowCart] = React.useState(false);

    return (
        <HeaderContainer colors={colors}>
            <h1><span className='mks'>MKS</span><span className='sistemas'>Sistemas</span></h1>
            <CartIcon setShowCart={setShowCart} showCart={showCart} />
        </HeaderContainer>
    )
}
export default Header;