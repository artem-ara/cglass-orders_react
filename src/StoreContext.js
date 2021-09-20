import React, { useState, useContext } from "react";

const StoreContext = React.createContext();

export const useStore = () => {
	return useContext(StoreContext);
};

export const StoreProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	const addCount = () => {
		setCount(count => count + 1);
	};

	const [orderList, setOrderList] = useState([]);

	const addItem = name => {
		const currentItems = [];

		orderList.forEach((e, i) => {
			currentItems[i] = e.position;
		});

		if (currentItems.includes(name)) {
			const i = currentItems.findIndex(item => item === name);
			orderList[i].quantity++;
		} else
			setOrderList(orderList => [
				...orderList,
				{ position: name, quantity: 1 },
			]);
	};

	const [shopClass, setShopCLass] = useState("shop");
	const shopClassToggle = () => {
		if (shopClass === "shop") setShopCLass("shop shop-active");
		else setShopCLass("shop");
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
				shopClass,
				shopClassToggle,
				deleteItem,
			}}
		>
			{children}
		</StoreContext.Provider>
	);
};
