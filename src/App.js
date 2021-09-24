import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/navbar/Cart';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <NavBar/>
      

      <Switch>

      <Route exact path="/Cart" >
        <Cart/>
      </Route>

      <Route exact path="/" >
        <ItemListContainer/>
      </Route>

      <Route exact path="/category/:idCategory" >
        <ItemListContainer saludo="Hola"/>
      </Route>
        {/* <Route exact path="/detalle" component={ItemDetailContainer}/> esto ya no esta, recordar */}


      <Route exact path="/item/:idItem" >
        <ItemDetailContainer/>
      </Route>
    
      </Switch>
    </div>
    
    </BrowserRouter> 
  )
}

export default App;
