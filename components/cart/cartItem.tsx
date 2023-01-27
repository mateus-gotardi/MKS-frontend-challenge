import React from "react";
import { colors, PriceTag } from "..";
import { ItemCart, CartCross } from "./styles";
import { formatPrice, formatName } from "../../utils/functions";
import { useDispatch } from 'react-redux'
import { addProduct, removeAll, removeProduct } from "../../features/cart/cartSlice"

const CartItem = (props: any) => {
    const product = props.product;

    const dispatch = useDispatch()

    return (
        <ItemCart colors={colors}>
            <div className='remove-product'>
                <CartCross isCart colors={colors} sizes={{ width: 1.125, height: 1.125, font: 0.875 }} onClick={() => { dispatch(removeAll(product)) }}>X</CartCross>
            </div>
            <div className="item">
                <div className="image-container">
                    <img className="cart-image" src={product.photo} alt={product.name} />
                </div>
                <h1 className="cart-name">{formatName(product.name, product.brand)}</h1>
                <div className="quantity-price">
                    <div className="quantity-modifier">
                        <label>Qtd:</label>
                        <div className="quantities">
                            <button className="less" onClick={() => { dispatch(removeProduct(product)) }}>-</button>
                            <span className="quantity">{product.quantity}</span>
                            <button className="more" onClick={() => { dispatch(addProduct(product)) }}>+</button>
                        </div>
                    </div>
                    <PriceTag price={formatPrice(product.price*product.quantity)} isCart/>
                </div>

            </div>
        </ItemCart>
    );
};

export default CartItem