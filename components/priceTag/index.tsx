import React from "react";
import { colors } from "..";
import { PriceTagStyles } from "./styles";

const PriceTag = (props: any) => {
    return (
        <PriceTagStyles colors={colors} isCart={props.isCart}>{props.price}</PriceTagStyles>
    );
};

export default PriceTag