import './CartSummaryItem.scss'

import { cart, type Cart, type Product } from '../atoms/cart';
import { useStore } from '@nanostores/react';
import { useState, useEffect } from 'react';
import { allTasks } from 'nanostores';

export default function CartSummaryItem(props: {product: Product}){
    var productArray = useStore(cart);
    var b = 0;
    const i = productArray.products.find((product:Product) => product.name == props.product.name)?.count;
    var a = 0;
    if(i !== undefined){
        a = i*Number(productArray.products.find((product:Product) => product.name == props.product.name)?.price);
        b = i;
    }

    const [count, setCount] = useState(b);
    const [price, setPrice] = useState(a);

    useEffect(() => {
        async function calculateSum(){
            await allTasks();
            var n = productArray.products.find((product:Product) => product.name == props.product.name);
            await allTasks();
            console.log(productArray);
            if(n){
                setPrice(n.count*Number(n.price));
            }
        }
        calculateSum();

        async function calculateCount(){
            var n = productArray.products.find((product:Product) => product.name == props.product.name);
            await allTasks();
            if(n){
                setCount(n.count);
            }
        }
        calculateCount();
    }, [cart]);

    useEffect(() => {
        setPrice(props.product.count * Number(props.product.price));
    }, [props.product.count]);

    function add(){
        const array = productArray.products.map((item) => {
            if(item.name == props.product.name) item.count++;
            return item;
        })
        const newCart:Cart = {products:array};
        cart.set({...newCart});
    }

    function subtract(){
        let whichToDelete = -2;
        const array = 
        productArray.products.map((item, index) => {
            if(item.name == props.product.name) {
                if(item.count === 1) {
                    const choice = confirm("Czy na pewno chcesz usunąc ten element?");
                    if(choice) {
                        whichToDelete = index;
                    } else {
                        whichToDelete = -1;
                    }
                }
                else {
                    item.count--;
                }
            }
            return item;
        });

        if(whichToDelete === -1) {
            return;
        } else if(whichToDelete >= 0) {
            const newArray = productArray.products.filter((_, index) => index !== whichToDelete);
            if(newArray.length === 0) {
                returnToShop();
            }
            const newDeletedCart:Cart = {products:newArray};
            cart.set({...newDeletedCart});
            return;
        }
        
        const newCart:Cart = {products:array};
        cart.set({...newCart});
    }

    useEffect(() => {
        if(productArray.products.length === 0) {
            returnToShop();
        }
    }, [productArray])

    
    function returnToShop() {
        window.location.assign('/sklep');
    }

    return (
        <div className='cart-summary-item'>
            <div className='cart-summary-item-info'>
                <img src={props.product.imageSource}></img>
                <h3 className='cart-summary-item-name'>{props.product.name}</h3>
            </div> 
             <div className='cart-summary-item-amount'>
                <button className='cart-summary-item-amount-minus' onClick={() => subtract()}>-</button>
                <h3 className='cart-summary-item-amount-amount'>{props.product.count}</h3>
                <button className='cart-summary-item-amount-plus' onClick={() => add()}>+</button>
            </div> 
             <h3 className='cart-summary-item-price'>{price}zł</h3>
        </div>
    )
}