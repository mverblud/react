import React from "react";
import ItemCount from "./ItemCount";
import { Button, Card ,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';



export const Item = ({ producto }) => {

    return (
        <>
            <Col className="col mb-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.pictureUrl} />
                    <Card.Body>
                        <Card.Title className="card-title text-uppercase">{producto.title}</Card.Title>
                        <Card.Text>{producto.id}</Card.Text>
                        <Card.Text>{producto.price}</Card.Text>
                        <Card.Text>
                            <ItemCount tope={producto.stock} ini={producto.initial} />
                            <Button variant="warning">
                                <Link to={`/item/${producto.id}`}>Ver</Link>
                            </Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}