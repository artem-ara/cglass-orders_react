import download from "downloadjs";
import "../css/BasketPage.scss";
import React, { useState } from "react";
import { ShopItem } from "../components/ShopItem";
import { useStore } from "../StoreContext";
import styled from "styled-components";

export const ShopList = () => {
	const { shopClass, shopClassToggle } = useStore();
	const store = useStore();
	const emptyOrder = store.list.length;
	const orderItems = store.list;

	const [btnClass, setBtnClass] = useState("btn btn-secondary unavailable");
	const [valid, setValid] = useState("form-control");
	const [nip, setNip] = useState("");
	const [companyName, setCompanyName] = useState("default");
    const [isOrderReady, setIsOrderReady] = useState(false)

	const nipVerify = e => {
		if (e.length >= 7 && emptyOrder > 0) {
			setBtnClass("btn btn-success");
			setValid("form-control");
            setIsOrderReady(true)
		} else {
			setBtnClass("btn btn-secondary unavailable");
			setValid("form-control is-invalid");
		}
	};

	const handleNipOnChange = value => {
		if (value.match(/^[1-9]*[1-9]$/g)) {
			nipVerify(value);
			setNip(value);
		}
	};

	const sendOrder = async () => {
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
		download(data, `${companyName || "noname"}-CGlassOrder.dbf`);
	};

	return (
		<div className={shopClass}>
			<div className="card">
				<h5 className="card-header">
					Twoje zamówienie{" "}
					<i className="fas fa-times" onClick={shopClassToggle}></i>
				</h5>
				<div className="card-body">
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
								onChange={event => setCompanyName(event.target.value)}
							/>
						</div>

						<div className="input-group mb-3">
							<input
								type="text"
								className={valid}
								placeholder="Wpisz NIP"
								minLength="7"
								onChange={event =>
									handleNipOnChange(event.target.value)
								}
								value={nip}
                                required
							/>
							<div className="invalid-tooltip">
								NIP musi zawierać 10 symbolów
							</div>
							<div className="input-group-append">
								<button
									className={btnClass}
									onClick={isOrderReady? sendOrder : null}
								>
									Wyślij
								</button>
							</div>
						</div>
				</div>
			</div>
		</div>
	);
};

const ShopItemLabel = styled.li`
	display: flex;
	justify-content: space-between;
	font-weight: bold;
`;

const ShopItemQuantity = styled.span(ShopItemLabel);
