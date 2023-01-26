import { ComponentProps } from "interfaces";
import styled from "styled-components";

export const PriceTagStyles = styled.span<ComponentProps>`
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
    @media (min-width: 500px){
        ${(props) => {
            if (props.isCart) {
                return `
                    background-color: ${props.colors.white};
                    color: ${props.colors.black};
    `}
    }}
    }

`