import { CartButton } from "./styles";
import React, { Dispatch, SetStateAction } from "react";
import { colors } from "..";
import ShoppingCart from "../../SVG/shoppingCart";

type Props = {
    setShowCart: Dispatch<SetStateAction<boolean>>;
    showCart: boolean;
    quantity: number;
};

const CartIcon: React.FC<Props> = ({showCart, setShowCart, quantity}) => {

    return (
        <CartButton colors={colors} onClick={()=>{setShowCart(!showCart)}}>
            <ShoppingCart />
            <span>{quantity}</span>
        </CartButton>
    );
};
export default CartIcon;