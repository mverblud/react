import React, { useContext, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap'
import { contexto } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { sumarCantidad } = useContext(contexto);

    return (
        <><Link to={`/cart/`}>
            <Button variant="warning">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {
                        (sumarCantidad())
                    }
                </span>
            </Button>
        </Link>
        </>
    )
}

export default CartWidget