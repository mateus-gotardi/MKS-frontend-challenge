import { createGlobalStyle } from "styled-components";
import { colors } from '../components'

const GlobalStyles = createGlobalStyle`
*,body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body{
    background-color: ${colors.background};
}
`

export default GlobalStyles;