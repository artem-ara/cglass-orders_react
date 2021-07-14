import React from "react";
import '../css/Basket.scss';
import {useStore} from "../StoreContext";

export const Basket = () => {
    const store = useStore()
    const toggleBasket = store.shopClassToggle

    return (
        <div className='basket '>
            <button className='basket-button' onClick={toggleBasket}>
                <i className="fas fa-dolly"></i>
                <strong className='count'>{store.count}</strong>
            </button>
        </div>
   )
}
