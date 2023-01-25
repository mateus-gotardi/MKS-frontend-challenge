import React from 'react';
import { colors } from '..';
import { ProductsDisplayContainer } from './styles';
import { selectProducts } from '../../features/products/productsSlice'
import { useSelector } from 'react-redux'

const ProductsDisplay = () => {
    const allProducts = useSelector(selectProducts)
    return (
        <ProductsDisplayContainer colors={colors}>
            
        </ProductsDisplayContainer>
    )
}

export default ProductsDisplay;