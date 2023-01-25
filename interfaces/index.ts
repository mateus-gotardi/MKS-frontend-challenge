export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    photo: string;
    quantity?: number;
}

export interface CartProducts {
    cartProducts: Product[];
}

export interface AllProducts {
    products: Product[];
    count: number;
}

export interface ApiResponse {
    data: AllProducts
}