import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Item } from './Item';

export const ItemList = ({ products = [] }) => {
    return (
        <>
            <Container className="px-3 px-md-5 mt-5" >
                <Row className="row row-cols-1 row-cols-md-2 row-cols-xl-4 gx-4 justify-content-center">
                    <Col className="col mb-5">
                        {products.map(item => <Item producto={item} />)}
                    </Col>
                </Row>
            </Container>
        </>
    );
};