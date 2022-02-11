import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../Firebase/firebase";

export default function ItemDetailContainer() {

    const { itemId } = useParams();
    const [Loading, setLoading] = useState(false);
    const [producto, setProducto] = useState({});

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection("items");
        const miItem = itemCollection.doc(itemId);

        miItem.get()
            .then((doc) => {

                setLoading(true);
                if (!doc.exists) {
                    console.log('no existe ese documento');
                    return
                }

                console.log('item found');
                setProducto({ id: doc.id, ...doc.data() });

            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId])

    return (
        <>
            {(Loading) ?
                <>
                    Loading...
                </>
                :
                <ItemDetail producto={producto} />
            }
        </>
    );
}