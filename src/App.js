import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {About} from './About'
import { Nav } from './Nav';
import { Products } from './pages/Products';

export default function App() {
   return (
      <React.Fragment>
         <Nav />
         <Switch>
            {/* <Route path='./' component={About} /> */}
            <Route path='/about' component={About} />
            {/* <Route path='./Products/:id' component={Products} /> */}
            <Route path='/Products' component={Products} />
      </Switch>
      </React.Fragment>
   );
}
