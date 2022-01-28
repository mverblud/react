import React, { useState, useEffect } from "react"
import { ItemList } from './ItemList';
import { useParams } from "react-router";

export default function ItemListContainer() {

    const { categoriaId } = useParams();

    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {

        const productos = [{ id: '001', title: 'Producto AA 1', price: 150, pictureUrl: '/22181.jpg', stock: 5, initial: 1, categoria: 'amortiguador' },
        { id: '002', title: 'Producto RR 2', price: 150, pictureUrl: '/22181.jpg', stock: 5, initial: 1, categoria: 'resortes' },
        { id: '003', title: 'Producto AA 3', price: 150, pictureUrl: '/22181.jpg', stock: 5, initial: 1, categoria: 'amortiguador' },
        { id: '004', title: 'Producto RR 4', price: 150, pictureUrl: '/22181.jpg', stock: 5, initial: 1, categoria: 'resortes' }];

        if (categoriaId){
            setItems(productos.filter(item => item.categoria == categoriaId))
        }else{
            setItems(productos)
        }
        
    }, [categoriaId])

    /*     const productosEnStock = new Promise((resolve, reject) => {
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
        }) */

    return (

        <>
{/*             {
                items.map(item => <div> { item.title }</div>)
            } */}
            {/*             {(llegoLaPromesa) ?
                <>
                    <ItemList products={items} />
                </>
                :
                <>Loading...</>
            } */}
            <ItemList products={items} />
        </>
    )
}