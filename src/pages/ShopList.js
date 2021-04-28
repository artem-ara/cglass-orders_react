import '../css/BasketPage.scss'
import React from "react";
import {ShopItem} from "../components/ShopItem";

export const ShopList = () => {
    return(
        <div className='shop'>
            <div className="container">
                <ul className='shop-list'>
                    <ShopItem />
                </ul>
            </div>
        </div>
    )
}