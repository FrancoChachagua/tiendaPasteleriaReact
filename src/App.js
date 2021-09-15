import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Count from './components/count/Count';


function App() {
  return (
    <Router>

    <Switch>
    <NavBar/>

    <Route path='/'>
    <ItemListContainer saludo="Adios"/>
    </Route>

    </Switch>
    
    <ItemListContainer saludo="Hola"/>
    <Count/>


    </Router>
  )
}

export default App;
