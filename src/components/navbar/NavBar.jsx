import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar=()=> {
    return (
        <>
        <Nav className="justify-content-center menuNavBackground" activeKey="/home">
            <Nav.Item>
                <Nav.Link  className="menuNavLink"  href="/home">Inicio</Nav.Link>
            </Nav.Item>
            <NavDropdown className="menuNavDropdown" title="Tienda" id="basic-nav-dropdown">
                        <NavDropdown.Item className="menuNavDropdown" exact href="/">Ver todo</NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown" exact href="/category/tartasytortas">Tartas y Tortas</NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown" exact href="/category/panes">Panes</NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown" exact href="/category/galletasybizcochos">Galletas y Bizcochos</NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown" exact href="/category/postressaludables">Postres Saludables</NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown" exact href="/category/postresporocasion">Postres por Ocasión</NavDropdown.Item>
            </NavDropdown>
            <a className="navbar-brand" href="./index.html"><img className="menuNavLogo" src="https://i.ibb.co/ChCgrX5/logo2.png" alt="logo pasteleria"/></a>
            <Nav.Item>
                <Nav.Link className="menuNavLink" eventKey="link-2">Nosotros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="menuNavLink" eventKey="link-3">Propuestas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="menuNavLink" eventKey="link-4">Contactanos</Nav.Link>
            </Nav.Item>
            <Link exact to='/detalle'>
                <CartWidget/>
            </Link>
        </Nav>
        </>
    ) 
}


export default NavBar