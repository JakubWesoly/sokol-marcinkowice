import { useState } from 'react';
import closeIcon from '../images/close.svg';
import { cart, type Cart, type Product } from '../atoms/cart';
import { useStore } from '@nanostores/react';

import './CartItem.scss';

export default function CartItem(props: {product: Product, canDelete?: boolean}) {
    const cartArray = useStore(cart);

    function deleteFromCart(){
        const productArray = cartArray.products;
		var newProductArray:Product[] = productArray.filter((item) => {
            if(item.name != props.product.name) return item;
        })
        cart.set({products:newProductArray})
	    return;
    }


    return (
            <li className='cart-item'>
                <a href={'/sklep/' + props.product.link}>
                    <div className='cart-product-info'>
                        <img src={props.product.imageSource} alt={props.product.name} />
                        <p>{props.product.name}</p>
                    </div>
                    <div className='cart-price-info'>
                        <p>{props.product.count}x</p>
                        <p>{props.product.price}zł</p>
                        {props.canDelete !== undefined && props.canDelete === true && <img src={closeIcon.src} alt="Ikona Usuwania" onClick={(e) => {e.preventDefault(); deleteFromCart()}} />}
                    </div>
                </a>
            </li>
    );
}