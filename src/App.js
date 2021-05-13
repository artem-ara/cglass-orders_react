import './css/App.css';
import React from 'react';
import { Nav } from './components/Nav';
import { Products } from './pages/Products';
import {StoreProvider} from "./StoreContext";
import {ShopList} from "./pages/ShopList";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {About} from './pages/About'

const App = () => {
    return (
        <Router>
            <StoreProvider>
                <Nav />
                <ShopList />
                <Route path='/' exact component={Products} />
                <Route path='/about' exact component={About} />
            </StoreProvider>
        </Router>
        
    )}

export default App;
