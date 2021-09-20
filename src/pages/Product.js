import React, { useState } from "react";
import data from "../data.json";
import { useStore } from "../StoreContext";

export const Product = props => {
	const onButtonClick = useStore();
	const name = data.magazyn[props.index].Indeks;
	const [existInBasket, setExistInBasket] = useState(false);

	const getItem = () => {
		if (!existInBasket) {
			setExistInBasket(true);
			onButtonClick.addCount();
			onButtonClick.addItem(name);
		}
	};

	return (
		<div className="card col-sm-4 mb-4" id={props.index}>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">
					{data.magazyn[props.index]["Nazwa artykulu"]}
				</p>
				<button className="btn btn-dark" onClick={getItem}>
					{!existInBasket ? (
						<i className="fas fa-plus"></i>
					) : (
						<i class="fas fa-check"></i>
					)}
				</button>
			</div>
		</div>
	);
};
