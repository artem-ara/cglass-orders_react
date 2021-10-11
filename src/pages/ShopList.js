import React, { useState } from "react";
import download from "downloadjs";
import styled from "styled-components";

import { ShopItem } from "../components/ShopItem";
import { useStore } from "../StoreContext";

export const ShopList = () => {
	const store = useStore();
	const isOrder = store.list.length;
	const orderItems = store.list;
	const { isBasketOpen, toggleBasket } = useStore();

	const [nip, setNip] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [isOrderReady, setIsOrderReady] = useState(true);
	const [isPending, setPending] = useState(false);

	const verifyOrder = () => {
		if (nip.length >= 7 && isOrder > 0 && companyName !== "")
			setIsOrderReady(true);
		else setIsOrderReady(false);
	};

	const handleNipChange = value => {
		verifyOrder(value);
		if (value.match(/^[0-9]+$/))
            setNip(value.replaceAll(/[\ \-]/g, ""))
	};

	const sendOrder = async () => {
		setIsOrderReady(false);
		setPending(true);
		const url = "https://dbf-order-lite-backend.herokuapp.com/dbf";
		const requestBody = {
			nip,
			orderItems,
		};

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		});
		const data = await response.blob();
		if (data) setPending(false);
		download(data, `${companyName}-CGlassOrder.dbf`);
	};

	return (
		<>
			<ShopItemWrapper active={isBasketOpen}>
				<div className="card">
					<ShopItemTitleWrapper className="card-header">
						Twoje zamówienie{" "}
						<i className="fas fa-times" onClick={() => toggleBasket()} />
					</ShopItemTitleWrapper>
					<div className="card-body text-center">
						<ul>
							<ShopItemLabel>
								Artykuł:<ShopItemQuantity>Ilość:</ShopItemQuantity>{" "}
							</ShopItemLabel>

							<ShopItem />
						</ul>

						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Nazwa firmy"
								onChange={event => {
									setCompanyName(event.target.value);
									verifyOrder();
								}}
								value={companyName}
							/>
						</div>

						<div className="mb-3">
							<input
								type="text"
								className="form-control"
								placeholder="Wpisz NIP"
								minLength="7"
								onChange={event => handleNipChange(event.target.value)}
								value={nip}
							/>
						</div>

						<div className="d-flex justify-content-around">
							<button
								className="btn btn-outline-danger"
								onClick={() => {
									store.clearOrder();
									setIsOrderReady(false);
								}}
							>
								Usuń wszystko
							</button>

							<button
								className={
									!isOrderReady
										? "btn btn-secondary"
										: "btn btn-success"
								}
								onClick={isOrderReady ? sendOrder : null}
								disabled={!isOrderReady}
							>
								Wyślij
							</button>
						</div>

						{isPending ? (
							<div className="spinner-border text-dark" role="status">
								<span className="sr-only">Загрузка...</span>
							</div>
						) : null}
					</div>
				</div>
			</ShopItemWrapper>
		</>
	);
};

const ShopItemLabel = styled.li`
	display: flex;
	justify-content: space-between;
	font-weight: bold;
`;

const ShopItemQuantity = styled.span(ShopItemLabel);

const ShopItemWrapper = styled.div`
	display: ${props => (props.active ? "block" : "none")};
	position: fixed;
	top: 3.5rem;
	right: 0rem;
	z-index: 1;
	width: 20rem;
	height: 40rem;
	border-radius: 5%;

	@media (max-width: 991px) {
		top: 6rem;
	}

	ul {
		padding: 0;
	}

	.card-header {
		i {
			margin-left: 10px;
			color: rgba(107, 94, 94, 0.692);

			&:hover {
				color: rgb(185, 0, 0);
			}
		}
	}
`;

const ShopItemTitleWrapper = styled.h5`
	.cardHeader {
	}
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;
