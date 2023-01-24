import styled from "styled-components";
import { ComponentProps } from "..";

export const HeaderContainer = styled.header<ComponentProps>`
width: 100%;
background-color: ${(props) => props.colors.primary};
height: 3rem;
`