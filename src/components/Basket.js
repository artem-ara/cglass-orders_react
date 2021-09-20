import { React } from "react";
import styled from "styled-components";

import { useStore } from "../StoreContext";

export const Basket = () => {
	const { shopClassToggle, count } = useStore();
	//TODO Create animation for basket

	return (
		<BasketWrapper>
			<BasketButton onClick={shopClassToggle}>
				<i className="fas fa-dolly"></i>
				<ItemQuantity>{count}</ItemQuantity>
			</BasketButton>
		</BasketWrapper>
	);
};

const BasketWrapper = styled.div`
	width: 69px;
	height: 63px;
	position: absolute;
	right: 30px;
	top: 90vh;
	background-color: black;
	border-radius: 50%;
	padding: 13px;

	@media (max-width: 991px) {
		top: 2rem;
		right: 7rem;
		i {
			font-size: x-large;
		}
	}

	.fa-dolly {
		color: white;
		font-size: 34px;
	}
`;

const BasketButton = styled.button`
	border-radius: 50%;
	display: flex;
	align-items: baseline;
	background: transparent;
	border: none;
`;

const ItemQuantity = styled.strong`
	position: absolute;
	width: 30px;
	height: 30px;
	right: -11px;
	top: -7px;
	background: tomato;
	color: white;
	border-radius: 50%;
	padding: 2px;
`;
