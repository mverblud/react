import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemList = [
	{ nombre: 'Inicio', enlace: '/' },
	{ nombre: 'Quienes Somos', enlace: '/QuienesSomos' },
	{ nombre: 'Contacto', enlace: '/contacto' },
]

function App() {
	return (
		<div className='App'>
			<NavBar data={ItemList} />
			<ItemListContainer greeting="Todo para la Suspesión" />
			</div>
	)
}

export default App;