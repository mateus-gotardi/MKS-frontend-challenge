import React from "react";
import { colors } from "..";
import { CartContainer, CartCross } from "./styles";
import CartItem from "./cartItem";
import { useSelector } from 'react-redux'
import { selectCart } from "../../features/cart/cartSlice";
import { formatPrice } from "../../utils/functions";

const Cart = (props: any) => {

    const cart = useSelector(selectCart)
    const getTotal = () => {
        let total = 0;
        cart.forEach(product => {
            total += product.price * product.quantity;
        });
        return total;
    }
    const total = getTotal();

    return (
        <CartContainer colors={colors}>
            <div onClick={() => { props.setShowCart(!props.showCart) }} className='out-div'></div>
            <div className="cart">
                <div className="cart-header">
                    <h1 className="cart-title">Carrinho<br />de compras</h1>
                    <CartCross colors={colors} sizes={{ width: 2.375, height: 2.375, font: 1.75 }} onClick={() => { props.setShowCart(!props.showCart) }}>X</CartCross>
                </div>
                <div className="cart-items">
                    {cart.map((product, key) => {
                        return <CartItem product={product} key={key} />
                    })}
                </div>
                <div className="cart-footer">
                    <h1><p>Total:</p><p>{formatPrice(total)}</p></h1>
                    <button>Finalizar compra</button>
                </div>
            </div>
        </CartContainer>
    );
};

export default Cart;