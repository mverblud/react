
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ItemCount from '../ItemListContainer/ItemCount';
import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { contexto } from '../CartContext/CartContext';


export default function ItemDetail({ producto }) {

    const { addItem } = useContext(contexto);

    const [mostrarItemCount, setMostrarItemCount] = useState(true);

    const onAdd = (cantidad) => {
        alert(cantidad);
        setMostrarItemCount(false);
        addItem(producto, cantidad);
    }

    return (
        <>
            <Container className='mt-5'>
                <Card style={{ width: "90%", margin: "auto" }}>
                    <Row>

                        <Col xs={12} md={8}>
                            <Card.Img src={producto.pictureUrl} style={{ height: "25rem", objectFit: "contain" }}
                            />
                        </Col>

                        <Col xs={12} md={4} className="d-flex">
                            <Card.Body>
                                <Card.Title>{producto.title}</Card.Title>
                                <Card.Text>{producto.id}</Card.Text>
                                <Card.Text style={{ fontSize: "1.5rem" }}>{producto.price}</Card.Text>
                                <Card.Text>(Quedan {producto.stock} disponibles)</Card.Text>
                                {
                                    (mostrarItemCount) ?
                                        <ItemCount stock={producto.stock} ini={producto.initial} onAdd={onAdd} />
                                        :
                                        <Button variant="warning">
                                            <Link to={`/cart`}>Finalizar Compra</Link>
                                        </Button>
                                }
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
}