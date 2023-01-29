import styled from "styled-components";
import { ComponentProps } from "../../interfaces";

export const CardContainer = styled.div<ComponentProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 13.625rem;
    height:17.813rem;
    background-color: ${(props) => props.colors.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    &:hover{
        .infos{
            .description{
                height:100%;
            }
            overflow: visible;
        }
        .buy-button{
            position: relative;
            top: 1rem;
        }
        position: relative;
        top: -1rem;
    }
    .infos{
        color: ${(props) => props.colors.darkGrey};
        height: 6.9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        margin-right: .722rem;
        margin-left: .9rem;
        overflow: hidden;
        .name-price{
            display: flex;
            justify-content: space-between;
            .name{
                font-size: 1rem;
                font-weight: 400;
            }
        }
        .description{
            margin-top: .5rem;
            margin-bottom: .4rem;
            font-size: .63rem;
            font-weight: 300;
        }
    }
    .buy-button{
            cursor: pointer;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0px 0px 8px 8px;
            background-color: ${(props) => props.colors.primary};
            color: ${(props) => props.colors.white};
            font-weight: 600;
            font-size: .88rem;
            border: none;
            height: 1.99rem;
            gap: .875rem;
            min-height: 1.99rem;
    }
    .product-image{
        padding: .4rem;
        max-height: 8.9rem;
        aspect-ratio: 1/1;
        object-fit: contain;
    }

`
export const ProductsDisplayContainer = styled.div<ComponentProps>`
    display: flex;
    align-items: top;
    justify-content: center;
    width:100%;
    margin-top: 6.3rem;
    padding-top: 5%;
    padding-bottom: 7%;
    overflow-x: hidden;
    .products{
        display: grid;
        grid-template-columns: repeat(4, 13.625rem);
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 80%;
        row-gap: 1.9375rem;
        column-gap: 1.375rem;
    }
    @media (max-width: 590px) {
        .products{
            grid-template-columns: repeat(1, 13.625rem);
        }
    }
    @media (min-width: 591px) and (max-width: 900px) {
        .products{
            grid-template-columns: repeat(2, 13.625rem);
        }
    }
    @media (min-width: 901px) and (max-width: 1024px) {
        .products{
            grid-template-columns: repeat(3, 13.625rem);
        }
    }
    @media (max-width: 475px){
        margin-top: 3rem;
    }
`