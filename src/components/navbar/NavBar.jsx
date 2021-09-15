import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar=()=> {
    return (
        <>
        <Nav className="justify-content-center menuNavBackground" activeKey="/home">
            <Nav.Item>
                <Nav.Link  className="menuNavLink"  href="/home">Inicio</Nav.Link>
            </Nav.Item>
            <NavDropdown className="menuNavDropdown" title="Tienda" id="basic-nav-dropdown">
                        <NavDropdown.Item className="menuNavDropdown" href="#action/3.1">Ver todo</NavDropdown.Item>
                        
                        <NavDropdown.Item className="menuNavDropdown" href="#action/3.2">Tartas y Tortas</NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown" href="#action/3.3">Galletas y bizcochos</NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown" href="#action/3.4">Postres saludables</NavDropdown.Item>
                        <NavDropdown.Item className="menuNavDropdown" href="#action/3.5">Postres por ocasión</NavDropdown.Item>
            </NavDropdown>
            <a className="navbar-brand" href="./index.html"><img className="menuNavLogo" src="https://i.ibb.co/ChCgrX5/logo2.png" alt=""/></a>
            <Nav.Item>
                <Nav.Link className="menuNavLink" eventKey="link-2">Nosotros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="menuNavLink" eventKey="link-3">Propuestas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="menuNavLink" eventKey="link-4">Contactanos</Nav.Link>
            </Nav.Item>
            <CartWidget/>
        </Nav>
        </>
    ) 
}


export default NavBar