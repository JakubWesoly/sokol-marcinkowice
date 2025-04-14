import { useEffect, useRef, useState } from 'react';
import cartIcon from '../images/cart-icon.svg';
import closeIcon from '../images/close.svg';
import { cart, type Cart, type Product } from '../atoms/cart';
import { useStore } from '@nanostores/react';

import CartItem from './CartItem';

import './Cart.scss';

import {gsap} from 'gsap';
import { allTasks } from 'nanostores';

export default function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartArray = useStore(cart);
    const [sum, setSum] = useState(0);
    const [cartList, setCartList] = useState([{} as Product]);
    
    const cartButtonRef = useRef<HTMLDivElement>(null);
    const cartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function calculateSum(){
            await allTasks();
            var sum = 0;
            cartArray.products.map((item) => sum += (item.count*Number(item.price)));
            setSum(sum);
        }
        calculateSum();

        async function createCartList(){
            await allTasks();
            setCartList(cartArray.products);
        }
        createCartList();
    }, [cartArray])

    function toggleCart() {
        if(cartButtonRef.current?.hasAttribute('disabled')) return;
        if(!isCartOpen)
            return setIsCartOpen(true);
        
        cartButtonRef.current?.setAttribute('disabled', '');
        
        if(window.innerWidth < 900) {
            gsap.to(cartContainerRef.current, {top: '100vh', duration: .3, onComplete() {setIsCartOpen(false); cartButtonRef.current?.removeAttribute('disabled');}})
        }
        else {
            gsap.to(cartContainerRef.current, {top: '8rem', opacity: 0, height: '200px', duration: .2, onComplete() {setIsCartOpen(false); cartButtonRef.current?.removeAttribute('disabled');}})
        }
        gsap.to(cartButtonRef.current?.querySelector('img.cart-button-open')!, {rotation: "+=90", scale: 1,opacity: .5, duration: .2})
        gsap.to(cartButtonRef.current?.querySelector('img.cart-button-close')!, {rotation: "+=90", scale: 0, opacity: 0, duration: .2})
        
    }

    useEffect(() => {
        const ctx = gsap.context(() => {});
        if(isCartOpen) {
            ctx.add(() => {
                if(window.innerWidth < 900) {
                    gsap.from(cartContainerRef.current, {top: '100vh', duration: .3, 
                        onComplete: function () {
                          gsap.set(this.targets(), { clearProps: "all" });
                        }})
                } else {
                    gsap.from(cartContainerRef.current, {top: '8rem', opacity: 0, height: '200px', duration: .2, 
                        onComplete: function () {
                          gsap.set(this.targets(), { clearProps: "all" });
                        }})
                }
                gsap.to(cartButtonRef.current?.querySelector('img.cart-button-open')!, {rotation: "-=90", scale: 0, opacity: .5, duration: .2, 
                })
                gsap.to(cartButtonRef.current?.querySelector('img.cart-button-close')!, {rotation: "-=90", scale: 1, opacity: 1, duration: .2})
            });
        }
        return () => {
            ctx.revert();
        }
    }, [isCartOpen, cartContainerRef]);

    return (
        <>
            <div className="cart-button" onClick={() => toggleCart()} ref={cartButtonRef}>
                <img src={cartIcon.src} alt="Ikona koszyka" className='cart-button-open'/>
                <img src={closeIcon.src} alt="Zamknij koszyk" className='cart-button-close'/>

            </div>
            <div className="cart-contents" style={{display: (isCartOpen ? 'flex' : 'none')}} ref={cartContainerRef}>
                <div>
                <div className='cart-contents-header'>
                    <h2>Twój koszyk</h2>
                    <img src={closeIcon.src} alt="Zamknij koszyk" onClick={() => toggleCart()}/>
                </div>
                {
                    cartArray.products.length > 0  ? 
                    <ul>
                        {
                            cartList.map((item, index) => {
                                return <CartItem key={index} product={item} canDelete={true}/>
                            })
                        }
                    </ul> :
                    <div className='empty-cart'>
                        Jeszcze jestem pusty
                    </div>
                }
                </div>
                <div className='cart-summary'>
                    <a href="/podsumowanie" className={cartArray.products.length == 0 ? "disabled" : ""}>Podsumowanie</a>
                    <p>Suma: {sum} zł</p>
                </div>
            </div>
        </>
    );
}