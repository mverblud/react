import React, { useState } from "react";
import { Button } from 'react-bootstrap';

export default function ItemCount({ stock, ini, onAdd }) {

    const [cantidad, setCantidad] = useState(ini);
    
    function sumar() {

        if (cantidad < stock) setCantidad(cantidad + 1)
    }

    function restar() {
        if (cantidad > ini) setCantidad(cantidad - 1)
    }

    return (
        <>
            <Button variant="dark" onClick={() => restar()}>-</Button>{' '}
            {cantidad}
            <Button variant="dark" onClick={() => sumar()}>+</Button>{' '}
            <Button variant="warning" onClick={() => onAdd(cantidad)}>AGREGAR</Button>
        </>
    )

}