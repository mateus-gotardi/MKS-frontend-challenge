import React from 'react';
import { colors, PriceTag } from '..';
import { CardContainer } from './styles';
import { Product } from '../../interfaces';
import ShoppingBasket from '../../SVG/shoppingBasket';
import { useDispatch } from 'react-redux'
import { addProduct } from "../../features/cart/cartSlice"
import { formatName, formatPrice } from '../../utils/functions';

const ProductCard = (props: any) => {

    const dispatch = useDispatch()

    const product: Product = props.product;
    return (
        <CardContainer colors={colors}>
            <img className='product-image' src={product.photo} alt={product.name} />
            <div className='infos'>
                <div className='name-price'>
                    <span className='name'>
                        {formatName(product.name, product.brand)}
                    </span>
                    <PriceTag price={formatPrice(product.price)}/>
                </div>
                <p className='description'>{product.description}</p>
            </div>
            <button className='buy-button' onClick={()=>{dispatch(addProduct(product))}}><>
                <ShoppingBasket /> COMPRAR
            </>
            </button>
        </CardContainer>
    )
}

export default ProductCard;