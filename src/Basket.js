import React from 'react';
import './Basket.scss';

export const Basket = (props) => {
   
   return (
      <div className='basket'>
         <strong className={'count'}>{props.count}</strong>
      </div>
   )
}
