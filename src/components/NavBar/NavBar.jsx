
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import logoOv from "./logoHorizontalAmarillo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ data }) => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						<img
							src={logoOv}
							width="150"
							height="120"
							className="img-fluid"
							alt="logo Web Ov suspensión"
						/></Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							{data.map((item) => {
								return <Nav.Link href={item.enlace}>{item.nombre}</Nav.Link>
							})}
						</Nav>
					</Navbar.Collapse>
					<Button variant="warning">
						<FontAwesomeIcon icon={faShoppingCart} />
					</Button>{' '}
				</Container>

			</Navbar>
		</>
	)
}

export default NavBar