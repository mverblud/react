import React, { useState, useRef, useContext } from "react";
import firebase from "firebase/app";
import { getFirestore } from '../../Firebase/firebase';
import { contexto } from "../CartContext/CartContext";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = () => {

    const [validated, setValidated] = useState(false);
    const { cart, sumarTodo, clear } = useContext(contexto);
    const [orderId, setOrderId] = useState('');

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            console.log('adentro if?');
        }else{
            event.preventDefault();
            handleClick();
            console.log('grabo orden');
        }

        console.log('paso por aca siempre?');

    //    handleClick();
        setValidated(true);
    };

    function handleClick() {

        const db = getFirestore();
        const orders = db.collection("orders");

        const miOrden = {
            buyer: {
                name: nameRef.current.value,
                address: addressRef.current.value,
                city: cityRef.current.value,
                state: stateRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
            },
            items: cart,
            total: sumarTodo(),
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }


        orders.add(miOrden)
            .then(({ id }) => {
                console.log('orden ingresada: ' + id);
                setOrderId(id);
                clear();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (

        <>  {
            (orderId) ?
                <Container>
                    <Row>
                        <Col>
                            <h1>Felicitaciones tu order es {orderId}</h1>
                            <Link to="/" className="btn btn-outline-primary">
                                Volver al Home
                            </Link>
                        </Col>
                    </Row>
                </Container>
                :
                <Container className="justify-content-center align-items-center mt-5">
                    <h1>Ingrese sus datos</h1>
                    <Row className="mt-5"  >
                        <Col>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                                        <Form.Label>Nombre y apellido</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Nombre y apellido"
                                            ref={nameRef}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese nombre y apellido.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                                        <Form.Label>Nro celular</Form.Label>
                                        <Form.Control type="text" placeholder="Nro celular" required ref={mobileRef} />
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese Nro celular.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="text" placeholder="Email" required ref={emailRef} />
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                                        <Form.Label>Dirección</Form.Label>
                                        <Form.Control type="text" placeholder="Dirección" required ref={addressRef} />
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese Dirección .
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                                        <Form.Label>Provincia</Form.Label>
                                        <Form.Control type="text" placeholder="Provincia" required ref={stateRef} />
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese Provincia.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" controlId="validationCustom06">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control type="text" placeholder="Ciudad" required ref={cityRef} />
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese Ciudad.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Button variant="success" type="submit">Finalizar</Button>
                            </Form>
                        </Col>
                    </Row>


                </Container>
        }
        </>
    );
}

export default Checkout