import React from "react";
import {useStore} from "../StoreContext";

export const ShopItem = () => {
   const store = useStore()

	const arr = store.list ;
	
	const groupBy = (arr) => {
		const newArr = [];
        const newArrPositions = [];

        arr.map(item => {

            if (newArrPositions.includes(item.position)) {
                const exist = item
                const i = newArr.findIndex(item => item.position === exist.position)
                newArr[i].quantity++
            } else {
                newArrPositions.push(item.position)
                item.quantity++
                newArr.push(item)
            }
            return newArr
        })
		return newArr
	}

    const currentOrder = groupBy(arr);
    console.log(currentOrder);

    console.log('render');
    return (
        currentOrder.map((item, index) => <li className='shop-item' key={index}>{item.position}</li>)
    )
}