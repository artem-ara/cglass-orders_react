import React, {useState} from 'react';
import {Product} from './Product';
import data from '../data.json';

export const Products = () => {
   const [count, setCount] = useState(0);
   const [value, setValue] = useState('');
   const products = new Array(data.magazyn.length).fill(' ').map((_, i) => i) ;
   const select = [];

   function searchProduct(value) {
      for (let i = 0; i < data.magazyn.length; i++) {
         if (data.magazyn[i].Indeks.indexOf(value.toUpperCase()) > -1) {
            select.push(i)
         } 
      }
   }

   searchProduct(value)

   const addItemInBasket = () => {
      setCount(count + 1)
   }

   return (
      <div className='container'>
         <div className="navbar navbar-light bg-light mt-3">
               <input className="form-control w-75 d-inline-block" type="search" placeholder="Wpisz nazwę lub indeks artykułu" 
               onChange={(e) => setValue(e.target.value)} />
               <button className="btn btn-outline-success my-2 my-sm-0 w-25" type="submit">Szukaj</button>
         </div>
         <div className="row mt-4">
            {products
               .filter(index => select.includes(index))
               .map(item => <Product key={item} index={item} onButtonClick={addItemInBasket} />)
            };
         </div>
      </div>
   )
}
