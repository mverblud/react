import React, { useContext, useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contexto } from "../CartContext/CartContext";
import CartItem from "./CartItem";


const Cart = () => {

    const { cart, clear, sumarTodo } = useContext(contexto);

    return (
        <>
            {cart.length === 0 ?
                <section className="d-flex flex-column justify-content-center align-items-center mt-3">
                    <h2>Su carrito está vacío</h2>
                    <Link to="/" className="btn btn-outline-primary">
                        Volver al Home
                    </Link>
                </section>
                :
                <Container>
                    {cart.map(element => <CartItem key={element.item.id} prod={element} />)}

                    <h4 className="my-3">Total ${sumarTodo()}</h4>

                    <Row className="mb-3">
                        <Col>
                            <Link to="/checkout" className="btn btn-success me-2">Finalizar Compra</Link>
                            <Button variant="danger" onClick={() => clear()}>Limpiar Carrito</Button>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default Cart;