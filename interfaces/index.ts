export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
}

export interface CartProduct{
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
    quantity: number;
}

export interface Cart {
    cartProducts: CartProduct[];
}

export interface AllProducts {
    products: Product[];
    count: number;
}

export interface ApiResponse {
    data: AllProducts
}
export interface ComponentProps {
    colors: {
        background: string,
        white: string,
        primary: string,
        black: string,
        grey: string,
        darkGrey: string,
        lightGrey: string,
        lighterGrey: string,
    };
    sizes?: {
        width?: number,
        height?: number,
        font?: number,
    }
    isCart?: boolean;
}