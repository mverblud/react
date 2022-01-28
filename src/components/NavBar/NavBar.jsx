
import CartWidget from '../CartWidget/CartWidget'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logoOv from "./logoHorizontalAmarillo.png"
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink className='me-2' to="/">
								Inicio
							</NavLink>
							<NavLink className='me-2' to="/categoria/amortiguador">
								Amortiguadores
							</NavLink>
							<NavLink to="/categoria/resortes">
								Resortes de Suspensión
							</NavLink>
						</Nav>
					</Navbar.Collapse>
					<CartWidget></CartWidget>
				</Container>

			</Navbar>
		</>
	)
}

export default NavBar
