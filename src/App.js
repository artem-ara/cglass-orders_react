import './css/App.css';
import React from 'react';
import { Nav } from './components/Nav';
import { Products } from './pages/Products';
import {StoreProvider} from "./StoreContext";
import {ShopList} from "./pages/ShopList";

const App = () => {
    return (
       <StoreProvider>
          <Nav />
          <ShopList />
          <Products />
       </StoreProvider>
    )}

export default App;
