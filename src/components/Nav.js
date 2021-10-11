import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useStore } from "../StoreContext";

export const Nav = () => {
	const { count, toggleBasket } = useStore();

	return (
		<>
			<Navbar className="navbar navbar-dark bg-dark navbar-expand-lg nav">
				<div className="navbar-brand" href="#">
					<strong>CGlass</strong>
				</div>
				<ul className="navbar-nav d-flex">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							<i className="fas fa-home" />
							&nbsp; Towary
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="about">
							<i className="far fa-question-circle" />
							&nbsp; O nas
						</Link>
					</li>
				</ul>
				<ul className="navbar-nav d-flex ml-auto">
					<li className="nav-item">
						<Link className="nav-link" onClick={() => toggleBasket()}>
							<BasketIcon className="fas fa-shopping-basket">
								{count ? (
									<ItemQuantity>
										<Count>{count}</Count>
									</ItemQuantity>
								) : (
									""
								)}
							</BasketIcon>
						</Link>
					</li>
				</ul>
			</Navbar>
		</>
	);
};

const Navbar = styled.nav`
	position: fixed;
	width: 100%;
	z-index: 2;
	justify-content: flex-start;
`;

const BasketIcon = styled.i`
	font-size: 21px;
`;

const ItemQuantity = styled.strong`
	position: absolute;
	width: 20px;
	height: 20px;
	right: 10px;
	top: 6px;
	background: tomato;
	color: white;
	border-radius: 50%;
	padding: 2px;
`;

const Count = styled.div`
	font-size: 16px;
`;
