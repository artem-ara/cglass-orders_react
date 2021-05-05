import './css/App.css';
import React from 'react';
import { Nav } from './components/Nav';
import { Products } from './pages/Products';
import {StoreProvider} from "./StoreContext";
import {ShopList} from "./pages/ShopList";
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <StoreProvider>
                <Nav />
                <ShopList />
                <Products />
            </StoreProvider>
        </Router>
        
    )}

export default App;
