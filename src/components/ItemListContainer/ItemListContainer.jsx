import React, { useState,useEffect } from "react"
import { ItemList } from './ItemList';

export default function ItemListContainer() {

    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [items, setItems] = useState([
        { id: '001', title: 'Producto 1', price: 150, pictureUrl: "/22181.jpg", stock: 5, initial: 1 },
        { id: '002', title: 'Producto 2', price: 150, pictureUrl: "/22181.jpg", stock: 5, initial: 1 }
    ]);

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('server caido');
            resolve(items);
        }, 3000)
    });

    useEffect(() => {
        productosEnStock
            .then(res => {
                setLlegoLaPromesa(true);
                setItems(res);
            })
            .catch(err => {
                console.log(err);
            });
    })

    return (

        <>
            {(llegoLaPromesa) ?
                <>
                    <ItemList products={items} />
                </>
                :
                <>Loading...</>
            }
        </>
    )
}