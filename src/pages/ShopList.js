import '../css/BasketPage.scss'
import React from "react";
import {ShopItem} from "../components/ShopItem";
import {useStore} from '../StoreContext';

export const ShopList = () => {
    const store = useStore()
    const shop = store.shopClass

    return(
        <div className={shop}>
            <div className="container">
                <ul className='shop-list'>
                    <ShopItem />
                </ul>
            </div>
        </div>
    )
}