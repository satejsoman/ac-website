import React from 'react';

import {Navbar, Nav} from 'react-bootstrap'

class Header extends React.Component { 
    render() { 
        return (
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg" class="sidebar sidebar-collapsed toggled">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={require('../logo.svg')}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Adaptive Control
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#team">COVIN team</Nav.Link>
                        <Nav.Link href="#sources">Data Sources</Nav.Link>
                        <Nav.Link href="#methods">Methods</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>            
        )
    }
}

export default Header;