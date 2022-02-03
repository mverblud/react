import React, { useContext } from "react";
import { contexto } from "../CartContext/CartContext";

const Cart = () => {

    const { cart } = useContext(contexto);

    return (
        <div>
            {cart.map(elemento => <div key={elemento.item.id}> {elemento.item.title} - Cantidad: {elemento.cantidad}</div>  )}
        </div>
    )
}

export default Cart;