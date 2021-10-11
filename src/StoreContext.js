import React, { useState, useContext } from "react";

const StoreContext = React.createContext();

export const useStore = () => {
	return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	const [orderList, setOrderList] = useState([]);
	const [isOrderReady, setIsOrderReady] = useState(false);
    const [isBasketOpen, setBasketOpen] = useState(false);

    const toggleBasket = () => setBasketOpen(prev => !prev)

	const clearOrder = () => {
		setOrderList([]);
        setCount(0)
	};

	const addCount = value => {
		setCount(count => count + +value);
	};

	const addItem = (name, quantityValue) => {
		const currentItems = [];

		orderList.forEach((e, i) => {
			currentItems[i] = e.position;
		});

		if (currentItems.includes(name)) {
			const i = currentItems.findIndex(item => item === name);
			let newOrderList = [...orderList];
			newOrderList[i].quantity += +quantityValue;
			setOrderList(newOrderList);
		} else
			setOrderList(orderList => [
				...orderList,
				{ position: name, quantity: +quantityValue },
			]);
	};

	const deleteItem = (item, index) => {
		orderList.splice(index, 1);
		const newState = [...orderList];
		setOrderList(newState);

		const quantity = item.quantity;
		setCount(item => item - quantity);
	};

	return (
		<StoreContext.Provider
			value={{
				count: count,
				addCount,
				list: orderList,
				addItem,
				deleteItem,
				clearOrder,
				isOrderReady,
				setIsOrderReady,
                isBasketOpen,
                toggleBasket
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};
