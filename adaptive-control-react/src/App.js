import React from 'react';
import { Container } from 'react-bootstrap';
import {Navbar, Nav, NavItem} from 'react-bootstrap'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
    // LinkContainer
} from "react-router-bootstrap";

import Home from './components/Home';
import Header from './components/Header';
import {loadLeaflet} from "./components/Maps"
import CovinTeam from "./components/CovinTeam";
import DataSources from "./components/DataSources";
import Methods from "./components/Methods";
import Routes from "./components/Routes";

import './App.css';

// const Header = _ => <>
//     <Navbar fixed="top" bg="dark" variant="dark" expand="lg" class="sidebar sidebar-collapsed toggled">
//     <LinkContainer to="/">
//         <Navbar.Brand>
//         <img alt="" src={require('./logo.svg')} width="30" height="30" className="d-inline-block align-top"/>{' '}
//         Home
//         </Navbar.Brand>
//     </LinkContainer>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//         <LinkContainer to="/team">COVIN team</LinkContainer>
//         <LinkContainer to="/sources">Data Sources</LinkContainer>
//         <LinkContainer to="/methods">Methods</LinkContainer>
//     </Nav>
//     </Navbar.Collapse>
//     </Navbar>         
// </>

const _Header = _ => <>
    <Navbar fluid collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <Link to="/">Scratch</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
        <NavItem href="/signup">Signup</NavItem>
        <NavItem href="/login">Login</NavItem>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    <Routes />
</>

const App = _ => <>
    {loadLeaflet()}
    <div className="App container">
    <Header />
    <Home />
    <CovinTeam />
    <DataSources />
    <Methods />
    {/* <Router>
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg" class="sidebar sidebar-collapsed toggled">
    <Navbar.Brand href="#home">
        <img alt="" src={require('./logo.svg')} width="30" height="30" className="d-inline-block align-top"/>{' '}
        Home
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="mr-auto">
            <Nav.Link href="#team">COVIN team</Nav.Link>
            <Nav.Link href="#sources">Data Sources</Nav.Link>
            <Nav.Link href="#methods">Methods</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>    
    <Routes />
    </Router> */}
    </div>
</>

export default App;