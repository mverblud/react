import React from "react";
import ItemCount from "./ItemCount";
import { Card } from 'react-bootstrap'

export const Item = ({
    id,
    title,
    price,
    pictureUrl,
    stock,
    initial
}) => {

    return (

        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {pictureUrl}/>
                <Card.Body>
                    <Card.Title className="card-title text-uppercase">{title}</Card.Title>
                    <Card.Text>{id}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>
                        <ItemCount tope={stock} ini={initial} />
                    </Card.Text>
                </Card.Body>
            </Card>

        </>
    )

}