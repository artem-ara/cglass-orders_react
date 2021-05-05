import React from "react";
import {useStore} from "../StoreContext";
import '../css/ShopItem.scss';

export const ShopItem = () => {
    const store = useStore()
	const currentItems = store.list
    const deleteItem = store.deleteItem

    return (
        currentItems.map((item, index) => {
            return (
                <li className='shop-item' key={index}>
                    <div className='shop-item-name'><i className="fas fa-times" onClick={() => deleteItem(item, index)}></i>&nbsp; {item.position}</div>
                    <span className={'shop-item-quantity'}>{item.quantity}</span>
                </li>
            )}
        )
    )
}