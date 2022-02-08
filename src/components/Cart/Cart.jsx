import React, { useContext, useState,useEffect   } from "react";
import { Link } from "react-router-dom";
import { contexto } from "../CartContext/CartContext";
import CartItem from "./CartItem";


const Cart = () => {

    const { cart, clear, sumarTodo } = useContext(contexto);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(sumarTodo());
    }, [])

    return (
        <>
            {cart.length === 0 ?
                <div>
                    <p>Carrito vacio</p>
                    <Link to='/'>Volver al inicio</Link>
                </div>
                :
                <div>
                    {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
                    Total ${total}
                    <button onClick={() => clear()}>Limpiar carrito</button>
                </div>
            }
        </>
    )
}

export default Cart;