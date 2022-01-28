import React from 'react';
import { Container, Row } from 'react-bootstrap'
import { Item } from './Item';

export const ItemList = ({ products = [] }) => {
    return (
        <>
            <Container className="container-fluid px-3 px-md-5 mt-5 " >
                <Row className="row row-cols-1 row-cols-md-2 row-cols-xl-4 gx-4 justify-content-center">
                    {products.map(item => <Item producto={item} />)}
                </Row>
            </Container>
        </>
    );
};