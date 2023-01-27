import styled from "styled-components";
import { ComponentProps } from "../../interfaces";

export const CartContainer = styled.div<ComponentProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    .cart-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4rem;
        margin-top:2.25rem;
        margin-left: 2.93rem;
        margin-right: 1.375rem;
        .cart-title{
            color: ${props => props.colors.white};
        }
    }
    .cart{
        width: 30.375rem;
        background-color: ${props => props.colors.primary};
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .cart-items{
            margin-bottom: 18rem;
        }
        .cart-footer{
            position: absolute;
            bottom: 0;
            display: flex;
            flex-direction: column;
            background-color: ${props => props.colors.primary};
            border: none;
            width: 29.44rem;
            button{
                width: 29.44rem;
                height: 6.06rem;
                background-color: ${props => props.colors.black};
                color: ${props => props.colors.white};
                font-size: 1.75rem;
                font-weight: 700;
                cursor: pointer;
                border:none;
            }
            h1{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1.25rem 2.93rem 2.625rem 2.93rem;
                font-size: 1.75rem;
                color: ${props => props.colors.white};
                font-weight: 700;
            }
        }
    }
    .out-div{
        height: 100%;
        width: calc( 100vw - 30.375rem);
    }

    @media (max-width: 500px) {
        .cart{
            width: 20.625rem !important;
        }
        .out-div{
            width: calc( 100vw - 20.625rem)!important;
        }
        .cart-footer{
            width: 20.625rem !important;
            h1{
                padding: 2.75rem 1.75rem !important;
            }
            button{
                width: 20.625rem !important;
                font-size: 1.25rem !important;
            }
        }
    }
    @media (max-height: 500px) {
        .cart-footer{
            h1{
                padding: .7rem 2.75rem!important;
                font-size: 1.5rem !important;
            }
            button{
                height: 4.3rem !important;
                font-size: 1.5rem !important;
            }
        }
    }
`


export const ItemCart = styled.div<ComponentProps>`

    display: flex;
    flex-direction: column;
    align-items: center;
    .quantity-price{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .item{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background-color: ${props => props.colors.white};
        color: ${props => props.colors.black};
        width: 23.68rem;
        height: 5.9375rem;
        padding: 1.18rem 1.44rem;
        margin-right: 3.75rem;
        margin-left: 2.9375rem;
        border-radius: 8px;
        box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
        .image-container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4rem;
            .cart-image{
                height: 3.5625rem;
                aspect-ratio: 1/1;
                object-fit: contain;
            }
        }
       
        .cart-name{
            font-size: .8125rem;
            width: 7.0625rem;
            font-weight: 400;
            line-height: 1.0625rem;
            margin-left: 1.25rem;
        }
        .cart-price{
            font-size: .875rem;
            font-weight: 700;
            padding-top: .4rem;
        }
    }
    .remove-product{
        width:100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 2.8rem;
        position: relative;
        top: 1rem;
        left: -.2rem;
        height: 1.8rem;
    }
    .quantity-modifier{
        color: ${props => props.colors.black};
        label{
         font-size: .3125rem;   
        }
        width: 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: .25rem;
        .quantities{
            display: flex;
            align-items: center;
            width: 3.125rem;
            height: 1.1875rem;
            border: 0.3px solid #BFBFBF;
            border-radius: 4px;
            border-color: ${props => props.colors.lighterGrey};
            justify-content: space-between;
            background-color: ${props => props.colors.white};
        }
        .less, .more{
            background-color: ${props => props.colors.white};
            border: none;
            font-size: .5rem;
            cursor: pointer;
            width: 70%;
            height: 70%;
            font-weight: 400;
        }
        .less{
            padding-left: .5rem;
            padding-right: .1rem;
        }
        .more{
            padding-right: .5rem;
            padding-left: .1rem;
        }
        .quantity{
            font-size: .5rem;
            font-weight: 400;
            border-right-style: solid;
            border-left-style: solid;
            border-width: .3px;
            padding: 0 .25rem;
            border-color: ${props => props.colors.lighterGrey};
        }
    }
    @media (max-width: 500px) {
        .item{
            width: 15.625rem !important;
            height: 13.75rem !important;
            flex-direction: column;
            justify-content: space-between;
            padding: 1rem;
            .cart-name{
                font-size: 1rem !important;
                width: 100% !important;
            }
        }
        .image-container{
            width: 14rem !important;
            .cart-image{
                height: 6.5rem !important;
            }
        }
        .quantity-price{
            width: 100% !important;
        }
        .quantities{
            width: 6.09rem !important;
            height: 2.16rem !important;
            .quantity, .less, .more{
                font-size: 1.25rem !important;
            }
        }
        .quantity-modifier{
            label{
                display:none;
            }
        }
        .cart-price{
            padding: 0 !important;
        }
        .remove-product{
            top: 2rem !important;
            left: -.1rem;
            height: 1rem;
        }
    }
`

export const CartCross = styled.button<ComponentProps>`
    cursor: pointer;
    background-color: ${props => props.colors.black};
    border: none;
    border-radius: 50%;
    color: ${props => props.colors.white};
    width: ${props => props.sizes?.width}rem;
    height: ${props => props.sizes?.height}rem;
    font-size: ${props => props.sizes?.font}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    @media (max-width: 500px) {
         color: ${props => props.colors.primary} !important;
         ${(props) => {
            if (props.isCart) {
                return `
                    background-color: ${props.colors.white};
                    color: ${props.colors.black} !important;
                    font-size: 2.625rem;
                    width: 3rem;
                    height: 3rem;
    `}
    }}
         ${(props) => {
            if (!props.isCart) {
                return `
                    font-size: 2.75rem;
                    width: 2.9rem;
                    height: 2.9rem;
    `}
    }}
    }
`