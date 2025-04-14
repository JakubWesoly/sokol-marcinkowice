import { cart, type Cart, type Product } from '../atoms/cart';
import { useStore } from '@nanostores/react';

// STYLES
import "./ShopItemMobile.scss";
import { useEffect, useRef, useState } from 'react';
import QuantityCounter from './QuantityCounter';

export default function ShopItemMobile(props: {
  product:Product,
  sizes: string[]
}) {

  const cartArray = useStore(cart);

  const contentRef = useRef<HTMLDivElement>(null);


	const [size, setSize] = useState(props.sizes[0] || '-');
	const [ammount, setAmmount] = useState(1);

  useEffect(() => {
    if(contentRef.current) {
      contentRef.current.innerHTML = props.product.description;
    }
  }, [contentRef])

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
		props.product.size = size;
	}, [size])

  return (
    <>
    <div className="mobile">

    <h3>{props.product.name}</h3>
      <div className="product-tags">
        <p>{props.product.price} PLN</p>
      </div>
      <section className="product-image">
        <img src={props.product.imageSource} alt="Zdjęcie produktu" />
      </section>
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
      <button className="mobile-button" onClick={() => addToCart()} type='submit'>Dodaj do koszyka</button>
      <article style={{ whiteSpace: "pre-line" }} ref={contentRef}></article>
    </div>
    </>
  );
}
