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
            <div className='products'>
                {allProducts.products.map((product) => {
                    return <ProductCard product={product} />
                })}
            </div>

        </ProductsDisplayContainer>
    )
}

export default ProductsDisplay;