import React, { useState, useEffect } from "react";
import { ItemList } from './ItemList';
import { useParams } from "react-router";

export default function ItemListContainer() {

    const { categoriaId } = useParams();
    const [Loading, setLoading] = useState(false);
    const [listItems, setListItems] = useState([]);

    const productos = [
        { id: '34301G-COR', title: 'AMORTIGUADOR CHEVROLET CORSA 94/... DELANTERO', price: '$1500', pictureUrl: '/22181.jpg', stock: 5, initial: 1, categoria: 'amortiguador' },
        { id: '22181-COR', title: 'RESORTES CHEVROLET CORSA 94/... DELANTERO', price: '$3500', pictureUrl: '/CAR949GNC.PNG', stock: 5, initial: 1, categoria: 'resortes' },
        { id: '34302G-COR', title: 'AMORTIGUADOR PEUGEOT 404 NAFTA/DIESEL .../82 DELANTERO', price: '$4500', pictureUrl: '/34301G.jpg', stock: 5, initial: 1, categoria: 'amortiguador' },
        { id: '22182-COR', title: 'RESORTE PEUGEOT 404 NAFTA/DIESEL .../82 DELANTERO', price: '$5000', pictureUrl: '/CAR949GNC.PNG', stock: 5, initial: 1, categoria: 'resortes' }];

    useEffect(() => {
        const productosEnStock = new Promise((resolve, reject) => {
            setTimeout(() => {
                //reject('server caido');
                resolve(productos);
            }, 2000)
        });
        productosEnStock
            .then(res => {

                setLoading(true);
                if (categoriaId) {
                    setListItems(res.filter(item => item.categoria === categoriaId))

                } else {
                    setListItems(res)
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoriaId])

    return (

        <>
            {(Loading) ?
                <>
                    Loading...
                </>
                :
                <ItemList products={listItems} />
            }
        </>
    )
}