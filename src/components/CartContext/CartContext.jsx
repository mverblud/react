import React, { createContext, useState } from "react";

export const contexto = createContext();

const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad) => {
        if (isInCart(producto.id)) {

            const index = cart.findIndex(elemento => elemento.item.id === producto.id);
            cart[index].cantidad = cart[index].cantidad + cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, { item: producto, cantidad }]);
        }

    }

    const removeItem = (id) => {
        const updateCart = cart.filter(element => element.item.id !== id);
        setCart([...updateCart]);
    }

    const clear = () => {
        setCart([]);
    }

    const sumarTodo = () => {

        return (cart.length > 0) ? cart.map((item) => item.item.price * item.cantidad).reduce((a, b) => a + b) : 0

    }

    const sumarCantidad = () => {
        return (cart.length > 0) ? cart.map((item) => item.cantidad).reduce((a, b) => a + b) : 0
    }

    const isInCart = (id) => cart.some(elemento => elemento.item.id === id);

    return (
        <contexto.Provider value={{ cart, addItem, removeItem, clear, sumarTodo, sumarCantidad }} >
            {children}
        </contexto.Provider >
    )
};

export default CartContext;