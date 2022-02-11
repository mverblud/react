import React, { useState, useEffect } from "react";
import { ItemList } from './ItemList';
import { useParams } from "react-router";
import { getFirestore } from "../../Firebase/firebase";

export default function ItemListContainer() {

    const { categoriaId } = useParams();
    const [Loading, setLoading] = useState(false);
    const [listItems, setListItems] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const itemCollection = db.collection("items")

        if (categoriaId) {
            itemCollection.where('categoryId', '==', categoriaId).get()
                .then((querySnapShot) => {

                    setLoading(true);
                    if (querySnapShot.size == 0) {
                        console.log('no hay documentos con en ese query');
                        return
                    }

                    setListItems(querySnapShot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    }
                    ));

                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });

        } else {
            itemCollection.get()
                .then((querySnapShot) => {

                    setLoading(true);
                    if (querySnapShot.size == 0) {
                        console.log('no hay documentos con en ese query');
                        return
                    }

                    setListItems(querySnapShot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    }
                    ));

                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
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