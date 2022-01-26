import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const ItemList = [
	{ nombre: 'Inicio', enlace: '/' },
	{ nombre: 'Quienes Somos', enlace: '/QuienesSomos' },
	{ nombre: 'Contacto', enlace: '/contacto' },
]

function App() {
	return (
		<BrowserRouter>
			<NavBar data={ItemList} />
			<Switch>

				<Route exact path="/">
					<ItemListContainer />
				</Route>

				<Route path="/item/:itemId">
					<ItemDetailContainer />
				</Route>

			</Switch>
		</BrowserRouter>
	)
}

export default App;