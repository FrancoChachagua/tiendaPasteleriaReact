import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cart from './components/navbar/Cart';
import { createContext } from 'react';
import CartContextProvider from './context/cartContext'
import { AuthenticationProvider } from './authentication/authenticationContext';
import { SingUp } from './authentication/SingUp';
import { LogIn } from './authentication/LogIn';
import { Error } from './authentication/Error';
import User from './authentication/User';
import { Ticket } from './components/purchaseTicket/Ticket';
import { PdfConverter } from './components/purchaseTicket/PdfConverter';

export const ContextApp = createContext('a')


function App() {
  
  return (
    <AuthenticationProvider>
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
          <NavBar/>
          
          <Switch>

          <Route exact path="/Error" >
            <Error/>
          </Route>

          <Route exact path="/Cart" >
            <Cart/>
          </Route>

          <Route exact path="/" >
            <ItemListContainer/>
          </Route>

          <Route exact path="/User">
            <User/>
          </Route>

          <Route exact path="/Ticket">
            <Ticket/>
          </Route>

          <Route exact path="/PdfConverter">
            <PdfConverter/>
          </Route>

          <Route exact path="/LogIn">
            <LogIn/>
          </Route>

          <Route exact path="/SignUp">
            <SingUp/>
          </Route>


          <Route exact path="/category/:idCategory" >
            <ItemListContainer/>
          </Route>  

          <Route exact path="/item/:idItem" >
            <ItemDetailContainer/>
          </Route>
      
          </Switch>
        </div>
        
        </BrowserRouter> 
        
      </CartContextProvider>
    </AuthenticationProvider>
  )
}

export default App;
