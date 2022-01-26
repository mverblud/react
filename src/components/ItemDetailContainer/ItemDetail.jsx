import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function ItemDetail({ producto }) {

    return (
        <>
            <div>
                {(producto.id) ?
                    <>{producto.id + " " + producto.title + " " + producto.pictureUrl}</>
                    :
                    <>Loading...</>
                }
                {/* <ComponenteQueTenemos stock={producto.stock} id={producto.id}/> */}
            </div>
        </>
    );
}