import '../css/BasketPage.scss'
import React, {useState} from "react";
import {ShopItem} from "../components/ShopItem";
import {useStore} from '../StoreContext';

export const ShopList = () => {
    const store = useStore()
    const shop = store.shopClass
    const toggleBasket = store.shopClassToggle
    const emptyOrder = store.list.length

    const [btn, setBtn] = useState('btn btn-secondary unavailable')
    const [valid, setValid] = useState('form-control')
    const nipVerify = (e) => {
        if (e.length >= 10 && emptyOrder > 0) {
            setBtn('btn btn-success')
            setValid('form-control')
        } else {
            setBtn('btn btn-secondary unavailable')
            setValid('form-control is-invalid')
        }
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

                    <div className="input-group mb-3">
                        <input 
                            type="text" className={valid} placeholder="Wpisz NIP"
                            minLength='10' onChange={e => nipVerify(e.target.value)} />
                            <div className="invalid-feedback">
                                NIP musi zawierać 10 symbolów
                            </div>
                        <div className="input-group-append">
                            <button className={btn} type="button">Wyślij</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}