import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemDetailContainerDos from './components/ItemDetail/ItemDetailContainerDos';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Switch>
        
      <Route exact path="/" >
        <ItemListContainer saludo="Hola"/>
      </Route>

      <Route exact path="/category/:idCategory" >
        <ItemListContainer saludo="Hola"/>
      </Route>
  
        <Route exact path="/detalle" component={ItemDetailContainer}/>

      <Route exact path="/item/:idItem" >
        <ItemDetailContainerDos/>
      </Route>
    
      </Switch>
    </div>
    
    </BrowserRouter> 
  )
}

export default App;
