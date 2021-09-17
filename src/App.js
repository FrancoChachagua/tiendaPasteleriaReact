import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';



function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo="Hola"/>
    <ItemDetailContainer/>
    </> 
  )
}

export default App;
