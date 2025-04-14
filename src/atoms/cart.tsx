import { persistentAtom } from '@nanostores/persistent'

export interface Cart{
    products: Array<Product>
}

export interface Product{
    imageSource: string,
    name: string,
    count: number,
    price: number,
    link: string,
    description: string,
    size: string,
    type:string
}

export const cart = persistentAtom<Cart>('cart', {products:[]}, {
    encode: JSON.stringify,
    decode: JSON.parse,
  });