import { ComponentProps } from "interfaces";
import styled from "styled-components";

export const FooterContainer = styled.footer<ComponentProps>`
    background-color: ${props => props.colors.lightGrey};
    width:100vw;
    height: 2.125rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    p{
        font-size: .75rem;
        color: ${props => props.colors.black};
    }
`