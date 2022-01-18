import React, { useState } from "react"
import Producto from './Producto';

export default function ItemListContainer() {

    const [arrayProductos, setArrayProductos] = useState([
        { id: 1, nombre: 'Amortiguador chevrolet corsa 94/... Delantero',  stock: 11, initial: 1  },
        { id: 2, nombre: 'Amortiguador Peugeot 404 Nafta/Diesel .../82 Delantero', stock: 1, initial: 1 }
    ]);

    return (

        <>
            {
                arrayProductos.map(item => <Producto item={item}></Producto>)

            }
        </>
    )
}