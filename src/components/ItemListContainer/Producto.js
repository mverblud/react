import React from "react";
import ItemCount from "./ItemCount";

import { Container, Row, Col, Card, Button } from 'react-bootstrap'


export default function Product({ item }) {

    function onAdd() {
        alert(item.nombre + ' ' + item.stock);
    }

    return (

        <>
            <Container className="px-3 px-md-5 mt-5" >
                <Row className="row row-cols-1 row-cols-md-2 row-cols-xl-4 gx-4 justify-content-center">
                    <Col className="col mb-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title className="card-title text-uppercase">{item.nombre}</Card.Title>
                                <Card.Text>
                                    <ItemCount tope={item.stock} ini={item.initial} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )

}