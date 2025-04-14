import CartSummary from "../components/CartSummary";

import './Checkout.scss';

import React from "react";
import { useState } from "react";
import { useStore } from "@nanostores/react";
import { cart } from "../atoms/cart";

interface BuyerInfo {
    name: string,
    email: string,
    phone: string,
}

type checkoutStage = "data" | "customization" | "finalize";


export default function Checkout() {
    const cartArray = useStore(cart);
    const [currentStage, setCurrentStage] = React.useState<checkoutStage>("data");
    const [buyerInfoFormData, setBuyerInfoFormData] = useState<BuyerInfo> ({
        name: '',
        email: '',
        phone: ''
      });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setBuyerInfoFormData(prevData => ({...prevData, [name]: value}))
    }


    function validateFieldPersonalInfo(): [passed: boolean, messages: string[]] {
        const messages: string[] = [];
        let passed = true;

        const {name, email, phone} = buyerInfoFormData;

        // Validate name
        if(name.length === 0 || !name.includes(" ")) {
            passed = false;
            messages.push("Proszę wpisać imię i nazwisko")
        }

        // Validate e-mail
        if(
            email.length === 0 ||
            !email
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) {
                passed = false;
                messages.push("Proszę wpisać poprawny adres mailowy")
        }

        // validate phone number
        if(phone.length === 9) {
            setBuyerInfoFormData(prevData => ({...prevData, phone: `+48${phone}`}))
        }
        else if(phone.length > 9) {
            if(phone.at(0) !== '+') {
                passed = false;
                messages.push("Proszę wpisać numer kierunkowy")
            }
        }
        else if(phone.length < 9) {
            passed = false;
            messages.push("Numer telefonu za krótki")
        }


        return [passed, messages];
    }

    function forwardStage(e: React.SyntheticEvent) {
        e.preventDefault();
        switch(currentStage) {
            case "data":
                const [passed, messages] = validateFieldPersonalInfo(); 
                if(!passed) {
                    let createdMessage = "Twoje dane są niepoprawne!\n\n";

                    messages.forEach(message => createdMessage += message + "\n");

                    alert(createdMessage)

                    return;
                }
                setCurrentStage("finalize");
                break;
            case "finalize":
                break;
        }
    }

    function printOutCart() {
        let result = "\n";
        let price = 0;
        cartArray.products.forEach((product) => {
          result += "Nazwa produktu: " + product.name + "\n";
          result += "Ilość: " + product.count + "\n";
          result +=
            "Cena za ten produkt: " + product.count * product.price + "zł\n";
          result += "\n--------------------------------\n";
          price += product.count * product.price;
        });
        result += "Łączna kwota: " + price + "zł";
        console.log(result);
        return result;
    }

    return (
        <main className="summary">
            <div className="summary-top">
                
                {currentStage === "data" &&     <div className="summary-buyer-info">
                    <div className="summary-buyer-info-form">
                        <form action="">
                            <h2 className="summary-buyer-info-form-title">Twoje dane</h2>
                            <label htmlFor="name-lastname">Imię i nazwisko</label>
                            <input type="text" placeholder="Jan Kowalski" id="name-lastname" name="name" onChange={(e) => handleChange(e)} value={buyerInfoFormData.name}/>
                            <br />
                            <label htmlFor="e-mail">E-Mail</label>
                            <input type="email" placeholder="mail@example.com" id="e-mail" name="email" onChange={(e) => handleChange(e)} value={buyerInfoFormData.email}/>
                            <br />
                            <label htmlFor="phone-number">Telefon</label>
                            <input type="tel" placeholder="+48123456789" id="phone-number" pattern="^\+48[0-9]{9}$" name="phone" onChange={(e) => handleChange(e)} value={buyerInfoFormData.phone}/>
                            <br />
                            <button onClick={(e) => forwardStage(e)} >Zapisz i kontynuuj</button>
                        </form>
                    </div>
                    <div className="summary-buyer-info-cart">
                        <h2 className="summary-buyer-info-cart-title">Twój koszyk</h2>
                        <CartSummary/>
                    </div>
                </div>}
                
                {currentStage === "customization" && <div className="summary-customization">
                    kastom
                    <button onClick={(e) => forwardStage(e)}>Zapisz i kontynuuj</button>
                </div>}
                {currentStage === "finalize" && <div className="summary-finalize">
                    <h2>Twoje zamówienie</h2>
                    <div className="summary-finalize-data">
                        <h2>Twoje dane</h2>
                        <h3>Imię i nazwisko: {buyerInfoFormData.name}</h3>
                        <h3>Adres e-mail: {buyerInfoFormData.email}</h3>
                        <h3>Telefon: {buyerInfoFormData.phone}</h3>
                    </div>
                    <div className="summary-finalize-cart">
                        <h2>Twoj koszyk</h2>
                        <CartSummary />
                    </div>
                    <form method="POST" encType="multipart/form-data">
                        <input type="hidden" name="BuyerName" value={buyerInfoFormData.name}></input>
                        <input type="hidden" name="BuyerEmail" value={buyerInfoFormData.email}></input>
                        <input type="hidden" name="BuyerPhone" value={buyerInfoFormData.phone}></input>
                        <input type="hidden" name="Cart" value={printOutCart()}></input>
                        <button type="submit">Złóż zamówienie</button>
                    </form>
                </div>}
            </div>
            <div className="summary-segments">

            </div>
        </main>
    );
}