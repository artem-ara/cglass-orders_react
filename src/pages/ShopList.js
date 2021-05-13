import download from 'downloadjs'
import '../css/BasketPage.scss'
import React, {useState} from "react";
import {ShopItem} from "../components/ShopItem";
import {useStore} from '../StoreContext';

export const ShopList = () => {
    const store = useStore();
    const shop = store.shopClass;
    const toggleBasket = store.shopClassToggle;
    const emptyOrder = store.list.length;
    const orderItems = store.list;

    const [btnClass, setBtnClass] = useState('btn btn-secondary unavailable');
    const [valid, setValid] = useState('form-control');
    const [nip, setNip] = useState('');

    const nipVerify = (e) => {
        if (e.length >= 10 && emptyOrder > 0) {
            setBtnClass('btn btn-success');
            setValid('form-control');
        } else {
            setBtnClass('btn btn-secondary unavailable');
            setValid('form-control is-invalid');
        }
    };

    const handleNipOnChange = (e) => {
        nipVerify(e.target.value);
        setNip(e.target.value);
    }

    const sendOrder = async () => {
        const url = 'https://dbf-order-lite-backend.herokuapp.com/dbf';
        const requestBody = {
            nip,
            orderItems
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.blob()
        download(data, 'order.dbf')        
    }

    return(
        <div className={shop}>
            <div className="card">
                <h5 className="card-header">Twoje zamówienie <i className="fas fa-times" onClick={toggleBasket}></i></h5>
                <div className="card-body">
                    <ul>
                        <li className='shop-item-bold'>Artykuł:<span className={'shop-item-bold'}>Ilość:</span> </li>
                        <ShopItem />
                    </ul>

                    <div class="mb-3">
                        <input type="text" className="form-control" placeholder="Uwagi do handlowca" />
                    </div>

                    <div className="input-group mb-3">
                        <input 
                            type="text" className={valid} placeholder="Wpisz NIP"
                            minLength='10' onChange={e => handleNipOnChange(e)} value={nip}/>
                            <div className="invalid-feedback">
                                NIP musi zawierać 10 symbolów
                            </div>
                        <div className="input-group-append">
                            <button className={btnClass} type="button" onClick={sendOrder}>Wyślij</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}