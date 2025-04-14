import './CartSummary.scss';

import CartSummaryItem from './CartSummaryItem.tsx';
import { cart, type Cart, type Product } from '../atoms/cart';
import { useStore } from '@nanostores/react';
import { useState, useEffect } from 'react';
import { allTasks } from 'nanostores';

import Modal from 'react-modal';

const customStyles = {
        content: {
            width: 'min(50ch, 100svw)',
            height: 'fit-content',
            inset: '50%',
            transform: "translate(-50%, -50%)",
            padding: '4rem',
            // borderRadius: '3rem'
        },
        overlay: {
            backgroundColor: '#000000AF',
            backdropFilter: 'blur(.5rem)'
        }
    }

export default function CartSummary(){
    var cartArray = useStore(cart);
    const [cartList, setCartList] = useState([{} as Product]);
    const [isModalOpen, setIsModalOpen] = useState(true);
    useEffect(() => {
        async function createCartList(){
            await allTasks();
            setCartList(cartArray.products);
        }
        createCartList();
    }, [cartArray])

    

    // const [arrayOfProducts, setArrayOfProducts] = useState(useStore(cart))
    // const [price, setPrice] = useState(calculateSum(cartArray));

    //  const [arrayOfProducts, setArrayOfProducts] = useState({products:[]} as Cart);

    // useEffect(() => {
    //     const array = useStore(cart); setInitLanguage(array)}, []);

    // cart.notify

    // useEffect(() => {setArrayOfProducts(useStore(cart))}, [setArrayOfProducts, useStore]);

    // function calculateSum(cart:Cart){
    //     var sum = 0;
    //     cart.products.map((item) => sum += (item.count*Number(item.price)));
    //     return sum;
    // }

    return (
        <div>
            <Modal
                isOpen={isModalOpen}
        
                // onAfterOpen={afterOpenModal}
                onRequestClose={() => setIsModalOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <h2 className="modal-heading">Ważny komunikat</h2>
                <p className="modal-text">Na tej stronie nie są procesowane żadne płatności. W formularzu należy podać dane kontaktowe do dalszego kontaktu z pracownikiem klubu, który wyśle zwrotnego maila kontaktowego.</p>
                <button onClick={() => setIsModalOpen(false)} className="modal-button">Rozumiem</button>
              </Modal>
            <div className='cart-summary-description'>
                <div className='cart-summary-description-grid'>
                    <h4 className='cart-summary-description-product'>Produkt</h4>
                    <h4 className='cart-summary-description-amount'>Ilość</h4>
                    <h4 className='cart-summary-description-price'>Cena</h4>
                </div>
                <div className='cart-summary-description-clear'></div>
                <hr className='cart-summary-description-hr'></hr>
            </div>
            <div className='cart-summary-items'>
                {cartList.map((item, index) => {
                    if(cart !== undefined) 
                        return <CartSummaryItem key={index} product={item}/>
                    })
                }
            </div>
            <div className='cart-summary-summary'>
                <hr className='cart-summary-summary-hr'></hr>
                <h4 className='cart-summary-summary-sum'>Suma: {cartArray.products.reduce((total, item) => total + (item.price * item.count), 0)}zł</h4>
            </div>
        </div>
    )
}