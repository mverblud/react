import React from 'react';
import { useContext } from 'react';
import { Card, Col, Row, Button } from "react-bootstrap";
import { contexto } from '../CartContext/CartContext';

const CartItem = ({ prod }) => {

    const { removeItem } = useContext(contexto);

    return (
        <Card className="mt-3">
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <Card.Img
                        variant="top"
                        src={prod.item.pictureUrl}
                        style={{ height: "9rem", objectFit: "contain" }}
                    />
                </Col>

                <Col>
                    <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                        <Card.Title>{prod.item.title}</Card.Title>
                        <Card.Text>
                            ${new Intl.NumberFormat().format(prod.item.price)} x {prod.cantidad} = $
                            {new Intl.NumberFormat().format(prod.item.price * prod.cantidad)}
                        </Card.Text>

                        <Button variant="outline-danger" onClick={() => removeItem(prod.item.id)}>
                            Eliminar producto
                        </Button>

                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
};

export default CartItem;