import React from 'react';
import data from '../data.json';
import {useStore} from "../StoreContext";

export const Product = (props) => {
    const onButtonClick = useStore()
    const name = data.magazyn[props.index].Indeks;

    const handleClick = () => {
            onButtonClick.addCount();
            onButtonClick.addItem(name)
    }

    return (
        <div className="card col-sm-4 mb-4" id={props.index}>
            <img src='https://cglass.pl/wp-content/uploads/2019/06/Zrzut-ekranu-2021-02-20-o-12.58.47.png' className="card-img-top" alt="glass hardware" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{data.magazyn[props.index]['Nazwa artykulu']}</p>
                <button className="btn btn-primary" onClick={() => handleClick()}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </div>
    )
}
