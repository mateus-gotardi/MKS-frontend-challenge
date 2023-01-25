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
    .infos{
        color: ${(props) => props.colors.darkGrey};
        height: 6.01rem;
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
            .price-tag{
                font-weight: 700;
                font-size: 15px;
                line-height: 15px;
                height: 1.625rem;
                padding: .25rem .41rem;
                background-color: ${(props) => props.colors.grey};
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${(props) => props.colors.white};
                border-radius: 5px;
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
    }
    img{
        padding: .4rem;
        width: fit-content;
        max-height: 55%;
    }

`
export const ProductsDisplayContainer = styled.section<ComponentProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    height: calc(100vh - 6.31rem);
    .products{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 80%;
        gap: 1rem;
    }
`