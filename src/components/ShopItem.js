import React from "react";
import styled from "styled-components";

import { useStore } from "../StoreContext";

export const ShopItem = () => {
	const store = useStore();
	const currentItems = store.list;
	const deleteItem = store.deleteItem;

	return currentItems.map((item, index) => {
		return (
			<ShopItemWrapper key={index}>
				<div className="shop-item-name">
					<ShopIcon
						className="fas fa-times"
						onClick={() => deleteItem(item, index)}
					/>
					&nbsp; {item.position}
				</div>
				<span>{item.quantity}</span>
			</ShopItemWrapper>
		);
	});
};

const ShopItemWrapper = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ShopIcon = styled.i`
	color: rgba(107, 94, 94, 0.692);
	&:hover {
		color: rgb(185, 0, 0);
	}
`;
