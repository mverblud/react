import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContext from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';

function App() {
	return (
		<CartContext>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path="/"><ItemListContainer /></Route>
					<Route path="/categoria/:categoriaId"><ItemListContainer /></Route>
					<Route path="/item/:itemId"><ItemDetailContainer /></Route>
					<Route path="/cart/"><Cart></Cart></Route>
				</Switch>
			</BrowserRouter>
		</CartContext>
	)
}

export default App;