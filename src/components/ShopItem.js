import React from "react";
import {useStore} from "../StoreContext";
import '../css/ShopItem.scss';

export const ShopItem = () => {
   const store = useStore()
	const currentItems = store.list ;

    return (
        currentItems.map((item, index) => <li className='shop-item' key={index}>{item.position} <span className={'shop-item-quantity'}>{item.quantity}</span> </li>)
    )
}