import { CartButton } from "./styles";
import React, { Dispatch, SetStateAction } from "react";
import { colors } from "..";
import ShoppingCart from "../../SVG/shoppingCart";
type Props = {
    setShowCart: Dispatch<SetStateAction<boolean>>;
    showCart: boolean;
};

const CartIcon: React.FC<Props> = ({showCart, setShowCart}) => {
    return (
        <CartButton colors={colors} onClick={()=>{setShowCart(!showCart)}}>
            <ShoppingCart />
            <span>0</span>
        </CartButton>
    );
};
export default CartIcon;