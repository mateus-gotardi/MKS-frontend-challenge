import styled from "styled-components";
import { ComponentProps } from "../../interfaces";

export const HeaderContainer = styled.header<ComponentProps>`
width: 100%;
background-color: ${(props) => props.colors.primary};
height: 6.3rem;
position: fixed;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
h1{
    color:${(props) => props.colors.white};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4.06rem;
    gap: .5rem;
    .mks{
        font-size: 2.5rem;
        font-weight: 600;
    }
    .sistemas{
        font-size: 1.25rem;
        font-weight: 300;
        height: 100%;
        padding-top: .6rem; 
    }
    .mks, .sistemas{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
z-index:999;
@media (max-width: 475px){
    height: 3rem;
    h1{
        margin-left: 1.25rem;
        .mks{
            font-size: 2rem;
        }
        .sistemas{
            font-size: 1rem;
        }
    }
}
`

export const CartButton = styled.button<ComponentProps>`
cursor: pointer;
width: 5.625rem;
height: 2.82rem;
margin-right: 5.5rem;
border: none;
background-color: ${(props) => props.colors.white};
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
.shopping-cart{
    width: 1.25rem;
    height: 1.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
span{
    font-size: 1.125rem;
    font-weight: 700;
}
@media (max-width: 475px){
    margin-right: 1.25rem;
    height: 1.625rem;
    width: 3.25rem;
    gap: .64rem;
    span{
        font-size: .75rem;
    }
    .shopping-cart{
        width: .7rem;
        height: .65rem;
    }
}
`