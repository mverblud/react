
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from '../ItemListContainer/ItemCount';

export default function ItemDetail({ producto }) {

    return (
        <>
            <Container fluid className="contenedorProd">
                <Row className="d-flex justify-content-center">
                    <Col className="contenedorProdInv text-center col-md-6">
                        <p className="fs-4 text-primary">{producto.title}</p>
                        <p className="lead text-secondary text-uppercase">{producto.categoria}</p>
                        <img alt='img' src={producto.pictureUrl} />
                        <p className="lead"><span className="fw-bold">Precio: $ </span>{producto.price}</p>
                        <ItemCount tope={producto.stock} ini={producto.initial} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}