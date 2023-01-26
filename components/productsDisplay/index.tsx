import React from 'react';
import { colors } from '..';
import { ProductsDisplayContainer } from './styles';
import { selectProducts } from '../../features/products/productsSlice'
import { useSelector } from 'react-redux'
import ProductCard from './card';

const ProductsDisplay = () => {
    const allProducts = useSelector(selectProducts)

    return (
        <ProductsDisplayContainer colors={colors}>
            <section className='products'>
                {allProducts.products.map((product, key) => {
                    return <ProductCard product={product} key={key}/>
                })}
            </section>

        </ProductsDisplayContainer>
    )
}

export default ProductsDisplay;