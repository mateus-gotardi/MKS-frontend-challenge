import React from 'react';
import { HeaderContainer } from './styles';
import { colors } from '..';

const Header = ()=>{
    return(
        <HeaderContainer colors={colors}>
            <h1>Header</h1>
        </HeaderContainer>
    )
}
export default Header;