import React from "react";
import { Basket } from "./Basket";
import "../css/Nav.scss";
import { NavLink } from "react-router-dom";

export const Nav = () => {
	return (
		<>
			<nav className="navbar navbar-dark bg-dark navbar-expand-lg nav">
				<Basket />
				<div className="navbar-brand" href="#">
					<strong>CGlass</strong>
				</div>
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" to="/">
							Główna
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="about">
							O nas
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
};
