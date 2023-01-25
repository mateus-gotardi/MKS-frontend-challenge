import React from 'react';
import { colors } from '..';
import { CardContainer } from './styles';
import { Product } from '../../interfaces';
import ShoppingBasket from '../../SVG/shoppingBasket';

const ProductCard = (props: any) => {
    const formatPrice = (price: number) => {
        let formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        let formattedPrice = formatter.format(price);
        return formattedPrice.slice(0, -3);;
    }
    const product: Product = props.product;
    return (
        <CardContainer colors={colors}>
            <img className='image' src={product.photo} alt={product.name} />
            <div className='infos'>
                <div className='name-price'>
                    <span className='name'>
                        {product.name}
                    </span>
                    <span className='price-tag'>
                        {formatPrice(product.price)}
                    </span>
                </div>
                <p className='description'>{product.description}</p>
            </div>
            <button className='buy-button'><>
                <ShoppingBasket /> COMPRAR
            </>
            </button>
        </CardContainer>
    )
}

export default ProductCard;