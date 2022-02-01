import React from "react";
import { Button, Card ,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ({ producto }) => {

    return (
        <>
            <Col className="col mb-5">
                <Card className="card h-100 border-2 rounded-3 shadow-lg">
                    <Card.Img className="card-img-top" src={producto.pictureUrl} />
                    <Card.Body className="card-body p-4 border-top border-2 text-center">
                        <Card.Title className="card-title text-uppercase">{producto.title}</Card.Title>
                        <Card.Text>{producto.id}</Card.Text>
                        <Card.Text>{producto.price}</Card.Text>
                        <Card.Text>
                            <Button variant="warning">
                                <Link to={`/item/${producto.id}`}>Ver más</Link>
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}