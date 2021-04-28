import React from "react";
import '../css/Basket.scss';
import {useStore} from "../StoreContext";

export const Basket = () => {
    const count = useStore()
   return (
      <div className='basket'>
          <button className='basket-button'>
              <i className="fas fa-dolly"></i>
              <strong className={'count'}>{count.count}</strong>
          </button>

      </div>
   )
}
