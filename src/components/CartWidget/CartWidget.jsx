import React, { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap'
import { contexto } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { cart, sumarCantidad } = useContext(contexto);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    useEffect(() => {
        setCantidadTotal(sumarCantidad());
    })

    return (
        <>
            <Button variant="warning">
                <Link to={`/cart/`}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="badge bg-dark text-white ms-1 rounded-pill">

                        {
                            (cantidadTotal)
                        }
                    </span>
                </Link>
            </Button>{' '}
        </>
    )
}

export default CartWidget