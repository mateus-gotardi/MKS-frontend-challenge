import React from "react";
import { FooterContainer } from "./styles";
import { colors } from "..";

const Footer = () => {
  return (
    <FooterContainer colors={colors}>
      <p>MKS sistemas © Todos os direitos reservados</p>
    </FooterContainer>
  );
};
export default Footer;