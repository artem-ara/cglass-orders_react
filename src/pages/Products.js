import React, { useState } from "react";
import { Product } from "./Product";
import data from "../data.json";

export const Products = props => {
	const [value, setValue] = useState("");
	const products = new Array(data.magazyn.length).fill(" ").map((_, i) => i);
	const select = [];

	const searchProduct = value => {
		for (let i = 0; i < data.magazyn.length; i++) {
			if (data.magazyn[i].Indeks.indexOf(value.toUpperCase()) > -1) {
				select.push(i);
			} else if (
				data.magazyn[i]["Nazwa artykulu"]
					.toUpperCase()
					.indexOf(value.toUpperCase()) > -1
			) {
				select.push(i);
			}
		}
	};

	searchProduct(value);

	const currentProducts = () => {
		const newView = products
			.filter(index => select.includes(index))
			.map(item => (
				<Product key={item} index={item} onButtonClick={props.addCount} />
			));

		if (!value || value.length < 3) return newView.slice(0, 0);
		else return newView.slice(0, 100);
	};

	return (
		<div className="container pt-5">
			<div className="navbar navbar-light bg-light mt-5">
				<input
					className="form-control w-100 d-inline-block"
					type="search"
					placeholder="Wpisz nazwę lub indeks artykułu np. NLO-KP-3000"
					onChange={e => setValue(e.target.value)}
				/>
			</div>
			<div className="row mt-4">{currentProducts()}</div>
		</div>
	);
};
