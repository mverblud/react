import React, { useState, useEffect } from "react"
import { ItemList } from './ItemList';
import { useParams } from "react-router";

export default function ItemListContainer() {

    const { categoriaId } = useParams();

    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {

        const productos = [
        { id: '34301G-COR', title: 'AMORTIGUADOR CHEVROLET CORSA 94/... DELANTERO', price: '$1500', pictureUrl: '/22181.jpg', stock: 5, initial: 1, categoria: 'amortiguador' },
        { id: '22181-COR', title: 'RESORTES CHEVROLET CORSA 94/... DELANTERO', price: '$3500', pictureUrl: '/CAR949GNC.PNG', stock: 5, initial: 1, categoria: 'resortes' },
        { id: '34302G-COR', title: 'AMORTIGUADOR PEUGEOT 404 NAFTA/DIESEL .../82 DELANTERO', price: '$4500', pictureUrl: '/34301G.jpg', stock: 5, initial: 1, categoria: 'amortiguador' },
        { id: '22182-COR', title: 'RESORTE PEUGEOT 404 NAFTA/DIESEL .../82 DELANTERO', price: '$5000', pictureUrl: '/CAR949GNC.PNG', stock: 5, initial: 1, categoria: 'resortes' }];

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