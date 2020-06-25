export declare type Size = 'XS' | 'S' | 'M' | 'L' | 'XL';
export declare type IProduct = {
    id: number;
    name: string;
    slug: string;
    colors: Array<string>;
    photo: string;
    price: number;
    sizes: Array<Size>;
};
