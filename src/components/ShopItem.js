import React from "react";
import styled from "styled-components";

import { useStore } from "../StoreContext";

export const ShopItem = () => {
	const store = useStore();
	const currentItems = store.list;
	const deleteItem = store.deleteItem;

	return currentItems.map((item, index) => {
		return (
			//TODO Create input with numbers to add quantity
			<ShopItemWrapper key={index}>
				<div className="shop-item-name">
					<ShopIcon
						className="fas fa-times"
						onClick={() => deleteItem(item, index)}
					></ShopIcon>
					&nbsp; {item.position}
				</div>
				<ShopItemQuantity type="text" defaultValue={1} />
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

const ShopItemQuantity = styled.input`
	width: 70px;
`;
