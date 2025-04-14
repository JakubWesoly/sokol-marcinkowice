import { cart, type Cart, type Product } from '../atoms/cart';
import { useStore } from '@nanostores/react';

import './ShopItem.scss';
import { useEffect, useRef, useState } from 'react';

import QuantityCounter from './QuantityCounter';

export default function ShopItem(props: {product: Product, sizes: string[]}) {
	const cartArray = useStore(cart);

	const [size, setSize] = useState(props.sizes[0] || '-');
	const [ammount, setAmmount] = useState(1);

	const articleRef = useRef<HTMLDivElement>(null);

	function addToCart(){
		const productArray = cartArray.products;
		let found = -1;
		productArray.forEach((item, index) => {
			if(item.name == props.product.name+ " ["+ size + "]"){
				found = index;
				return;
			}
		}) 

		if(found === -1) {
			cart.set({products:[...cartArray.products, {...props.product, count: ammount, name: props.product.name + " ["+ size + "]"}]});
		} else {
			productArray[found].count += ammount;
			cart.set({products:[...productArray]});
		}

		alert("Dodano do koszyka");
		return;
	}

	useEffect(() => {
		if(articleRef.current) {
			articleRef.current.innerHTML = props.product.description
		}
	}, [articleRef]);

	useEffect(() => {
		props.product.size = size;
	}, [size])

    return (
        <>
			<section className="product-photo">
				<img src={props.product.imageSource} alt="Zdjęcie produktu" />
			</section>
			<section className="product-info">
				<h3>{props.product.name}</h3>
				<p className="product-price">{props.product.price}PLN</p>
				<div className='product-details'>
					{
						props.sizes.length !== 0 &&
						<>
						<label htmlFor="">Rozmiar </label>
						<select name="" id="" onChange={(e) => setSize(e.target.value)}>
							{
								props.sizes.map(size => 
									<option value={size} key={`sizes-${size}`}>{size}</option>
								)
							}
						</select>
						</>
					}
					<label htmlFor="">Ilość </label>
					<QuantityCounter count={ammount} setCount={setAmmount}/>
				</div>
				<button className="submit-product-button" onClick={() => addToCart()}>Dodaj do koszyka</button>
				<article style={{whiteSpace: "pre-line"}} ref={articleRef}>
				</article>
			</section>
        </>
    )
}