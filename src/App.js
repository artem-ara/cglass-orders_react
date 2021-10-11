import React from "react";
import { Nav } from "./components/Nav";
import { Products } from "./pages/Products";
import { StoreProvider } from "./StoreContext";
import { ShopList } from "./pages/ShopList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from "./pages/About";

const App = () => {
	const routes = [
		{
			path: "/",
			component: Products,
		},
		{
			path: "/about",
			component: About,
		},
	];

	return (
		<Router>
			<StoreProvider>
				<Nav />
				<ShopList />

				{routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact
						component={route.component}
					/>
				))}
			</StoreProvider>
		</Router>
	);
};

export default App;
