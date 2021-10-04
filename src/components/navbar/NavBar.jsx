import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext'

const NavBar=()=> {
    const { cartList } = useCartContext();

    return (
        <>
        <Nav className="justify-content-center menuNavBackground" activeKey="/home">
            <Link exact to="/inicio" className="menuNavLink" >Inicio</Link>
            <NavDropdown className="menuNavDropdown" title="Tienda" id="basic-nav-dropdown">
                        <NavDropdown.Item  className="menuNavDropdown"> <Link  className="" exact to="/">Ver todo</Link> </NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown">  <Link className="" exact to="/category/tartasytortas"> Tartas y Tortas </Link> </NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown">  <Link exact to="/category/panes"> Panes </Link> </NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown">  <Link exact to="/category/galletasybizcochos"> Galletas y Bizcochos </Link> </NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown">  <Link exact to="/category/postressaludables"> Postres Saludables </Link> </NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown">  <Link exact to="/category/postresporocasion"> Postres por Ocasión </Link> </NavDropdown.Item>
            </NavDropdown>
            <Link exact to="/">
                <Navbar.Brand><img className="menuNavLogo" src="https://i.ibb.co/ChCgrX5/logo2.png" alt="logo pasteleria"/></Navbar.Brand>
            </Link>
            {/* <Nav.Link className="navbar-brand" exact href="/"><img className="menuNavLogo" src="https://i.ibb.co/ChCgrX5/logo2.png" alt="logo pasteleria"/></Nav.Link> */}
            <Link className="menuNavLink" exact to="/nosotros" eventKey="link-2">Nosotros</Link>
            <Link className="menuNavLink" exact to="/propuestas" eventKey="link-3">Propuestas</Link>
            <Link className="menuNavLink" exact to="/contactanos" eventKey="link-4">Contactanos</Link>
            <Link exact to='/Cart'>
                <CartWidget numberCart={cartList.length} />
            </Link>
        </Nav>
        </>
    ) 
}


export default NavBar