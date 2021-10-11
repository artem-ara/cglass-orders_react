import React, { useState } from "react";
import data from "../data.json";
import { useStore } from "../StoreContext";
import styled from "styled-components";

export const Product = ({ index }) => {
	const { addCount, addItem } = useStore();
	const indeks = data.magazyn[index].Indeks;
	const [isItemInBasket, setItemInBasket] = useState();
	const [value, setValue] = useState(1);

    const inputValueHandler = value => value.match(/[0-9]+/) ? setValue(value) : '';

	return (
		<div className="card col-sm-4 mb-4" id={index}>
			<div className="card-body">
				<h5 className="card-title">{indeks}</h5>
				<p className="card-text">{data.magazyn[index]["Nazwa artykulu"]}</p>
				<form className="d-flex justify-content-around">
					<QuantityInput type="number" value={value} placeholder="Ilość" onChange={event => inputValueHandler(event.target.value)} />
					<button
						className="btn btn-dark"
						onClick={e => {
							e.preventDefault();
							addCount(value);
							setItemInBasket(true);
							addItem(indeks, value);
						}}
					>
						<i className="fas fa-plus" />
					</button>
                    {isItemInBasket ? <i className="fas fa-check" /> : null}
				</form>
			</div>
		</div>
	);
};

const QuantityInput = styled.input`
	width: 70px;
`;
