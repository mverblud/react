import React, { useState } from "react";
import { Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function ItemCount({ tope, ini }) {

    const [cantidad, setCantidad] = useState(ini);

    function sumar() {

        if (cantidad < tope) setCantidad(cantidad + 1)
    }

    function restar() {
        if (cantidad > ini) setCantidad(cantidad - 1)
    }

    function onAdd() {
        alert(cantidad);
    }

    return (
        <>

            <Button variant="dark" onClick={() => restar()}>-</Button>{' '}
            {cantidad}
            <Button variant="dark" onClick={() => sumar()}>+</Button>{' '}
            <Button variant="warning" onClick={() => onAdd()}>AGREGAR</Button>
        </>
    )

}