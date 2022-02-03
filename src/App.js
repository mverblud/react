import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>

				<Route exact path="/">
					<ItemListContainer />
				</Route>

				<Route path="/categoria/:categoriaId">
					<ItemListContainer />
				</Route>

				<Route path="/item/:itemId">
					<ItemDetailContainer />
				</Route>

				<Route path="/cart/">
				{/* 	<ItemDetailContainer /> */}
				</Route>

			</Switch>
		</BrowserRouter>
	)
}

export default App;