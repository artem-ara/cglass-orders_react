import React from 'react';
import { NavLink } from 'react-router-dom';
import {Basket} from './Basket';

export const Nav = (props) => {
   return (
      <>
         <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
            <div className="navbar-brand" href="#"><strong>CGlass</strong></div>
            <ul className='navbar-nav'>
               <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">Główna</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/products">Towary</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/about">O nas</NavLink>
               </li>
            </ul>
            <Basket className='basket' count={props.count} />
         </nav>         
      </>
   )
}
