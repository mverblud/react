import React, { useState, useRef, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from '../../Firebase/firebase';
import { contexto } from "../CartContext/CartContext";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Checkout = () => {

    const { cart, sumarTodo } = useContext(contexto);

    const [orderId, setOrderId] = useState('');

    const nameRef = useRef();
    const addressRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();

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
            })
            .catch((err) => {
                console.log(err);
            });

    }

    return (

        <>
            {orderId && (<h1>Felicitaciones tu order es {orderId}</h1>)}

            <Container className="justify-content-center align-items-center">
                <Row>
                    <Col>
                        <h3>Ingresa tus datos:</h3>

                        <input type="text" name="name" ref={nameRef} placeholder="Nombre y Apelllido" />
                        <br />

                        <input type="text" name="mobile" ref={mobileRef} placeholder="Nro de Celular" />
                        <br />

                        <input type="text" name="email" ref={emailRef} placeholder="Email" />
                        <br />

                        <input type="text" name="state" ref={stateRef} placeholder="Provincia" />
                        <br />

                        <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
                        <br />

                        <input type="text" name="address" ref={addressRef} placeholder="Direccion" />
                        <br />

                        <Button variant="success" onClick={() => handleClick()} > Finalizar</Button>
                    </Col>
                </Row>

{/*                 <Row>
                    <Col>
                        <h3>Ingresa tus datos:</h3>

                        <Form>
                            <Form.Group className="mb-3">

                                <Form.Label>Nombre y apellido</Form.Label>
                                <Form.Control type="text" ref={nameRef} placeholder="Nombre y Apellido" />
                                
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" ref={emailRef} placeholder="Email" />
                                
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="text" ref={mobileRef} placeholder="Telefono" />
                                
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control type="text" ref={stateRef} placeholder="Provincia" />
                                
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" ref={cityRef} placeholder="Ciudad" />

                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" ref={cityRef} placeholder="Dirección" />

                            </Form.Group>

                            <Button variant="success" onClick={() => handleClick()} > Finalizar</Button>
                        </Form>
                    </Col>
                </Row> */}
            </Container>
        </>
    );
}

export default Checkout