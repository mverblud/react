import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap'

const CartWidget = () => {
    return (
        <>
            <Button variant="warning">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </Button>{' '}
        </>
    )
}

export default CartWidget