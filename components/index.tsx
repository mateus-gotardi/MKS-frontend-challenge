import Header from "./header";

const colors = {
    background: '#F9F9F9',
    white: '#FFFFFF',
    primary: '#0F52BA',
    black: '#000000',
    grey: '#373737',
    darkGrey: '#2C2C2C',
}
interface ComponentProps {
    colors: {
        background:string,
        white:string,
        primary:string,
        black:string,
        grey:string,
        darkGrey:string,
    };
}

export { colors, Header };
export type { ComponentProps };

