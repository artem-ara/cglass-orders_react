import React from 'react';
import {Basket} from "./Basket";

export const Nav = () => {
   return (
      <>
         <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
            <Basket />
            <div className="navbar-brand" href="#"><strong>CGlass</strong></div>
            <ul className='navbar-nav'>
               <li className="nav-item">
                  <a className="nav-link" href="/">Główna</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="/products">Towary</a>
               </li>
               <li className="nav-item">
                  <a className="nav-link" href="/about">O nas</a>
               </li>
            </ul>
         </nav>         
      </>
   )
}
