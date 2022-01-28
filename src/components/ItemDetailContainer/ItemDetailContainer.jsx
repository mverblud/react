
import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        setTimeout(() => {

            let listadoDeProductos = [
                { id: '34301G-COR', title: 'AMORTIGUADOR CHEVROLET CORSA 94/... DELANTERO', price: '$1500', pictureUrl: '/22181.jpg', stock: 5, initial: 1, categoria: 'amortiguador' },
                { id: '22181-COR', title: 'RESORTES CHEVROLET CORSA 94/... DELANTERO', price: '$3500', pictureUrl: '/CAR949GNC.PNG', stock: 5, initial: 1, categoria: 'resortes' },
                { id: '34302G-COR', title: 'AMORTIGUADOR PEUGEOT 404 NAFTA/DIESEL .../82 DELANTERO', price: '$4500', pictureUrl: '/34301G.jpg', stock: 5, initial: 1, categoria: 'amortiguador' },
                { id: '22182-COR', title: 'RESORTE PEUGEOT 404 NAFTA/DIESEL .../82 DELANTERO', price: '$5000', pictureUrl: '/CAR949GNC.PNG', stock: 5, initial: 1, categoria: 'resortes' }];

            listadoDeProductos = listadoDeProductos.filter(item => item.id == itemId);

            let myProducto = listadoDeProductos[0];

            setProducto(myProducto);

        }, 2000)
    }, [itemId])

    return (
        <>
            <ItemDetail producto={producto} />
  {/*           <Link to={"/item/002"}>ir al item 2</Link> */}
        </>
    );
}