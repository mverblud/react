
import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        setTimeout(() => {

            let listadoDeProductos = [
            { id: '001', title: 'Producto 1', price: 150, pictureUrl: "/22181.jpg", stock: 5, initial: 1 , categoria: "amortiguadores"},
            { id: '002', title: 'Producto 2', price: 150, pictureUrl: "/22181.jpg", stock: 5, initial: 1 , categoria: "resortes"},
            { id: '003', title: 'Producto 3', price: 150, pictureUrl: "/22181.jpg", stock: 5, initial: 1 , categoria: "amortiguaodres"},
            { id: '004', title: 'Producto 4', price: 150, pictureUrl: "/22181.jpg", stock: 5, initial: 1 , categoria: "resortes"}];

            listadoDeProductos = listadoDeProductos.filter(item => item.id == itemId);

            let myProducto = listadoDeProductos[0];

            setProducto(myProducto);

        }, 2000)
    }, [itemId])

    return (
        <>
            {itemId}
            <ItemDetail producto={producto} />
  {/*           <Link to={"/item/002"}>ir al item 2</Link> */}
        </>
    );
}