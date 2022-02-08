import React from 'react';
import { useContext } from 'react';
import { contexto } from '../CartContext/CartContext';

const CartItem = ({ prod }) => {

    const { removeItem } = useContext(contexto);

    return (
        <div>
            <h3>{prod.item.title} </h3>
            <p> Cantidad : {prod.cantidad}</p>
            <p>Precio ${prod.item.price} </p>
            <p>SubTotal ${prod.item.price * prod.cantidad}</p>
            <button onClick={() => removeItem(prod.item.id)}>borrar producto</button>
        </div>
    )
};

export default CartItem;