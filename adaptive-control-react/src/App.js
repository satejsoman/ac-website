import React from 'react';
import './App.css';
import {Navbar, Nav, Row} from 'react-bootstrap'

import { Map, GeoJSON, TileLayer } from 'react-leaflet'
import MH from "./MH_resave.json"
import IN from "./india_resave.json"

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Badge from 'react-bootstrap/Badge'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";


import {LineChart, Line} from 'recharts'

const linechartdata = [
    {"Rt": 4.354},
    {"Rt": 4.34},
    {"Rt": 3.926},
    {"Rt": 2.553},
    {"Rt": 2.699},
    {"Rt": 1.819},
    {"Rt": 1.915},
    {"Rt": 1.611},
    {"Rt": 1.503},
    {"Rt": 1.207},
]

const state = {
    lat: 19.451439467593936,
    lng: 76.10769194927978,
    zoom: 6
};

const nation = { 
    lat: 23.384770186094563,
    lng: 79.47014819820568,
    zoom: 5
}

function Rt_color(Rt) { 
    return Rt > 2 ? "red"    : 
           Rt > 1 ? "orange" : 
                    "green";
}

function style(feature) {
    return {
        fillColor: Rt_color(feature.properties.Rt-1),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        // dashArray: '3',
        fillOpacity: 0.7
    };
}

function App() {
  return (
    <>
    <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
    />
    <div className="App">
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={require('./logo.svg')}
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

    <Container fluid>
    <Row>
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton variant="secondary">COVID-19 Cases</ToggleButton>{' '}
        <ToggleButton variant="secondary"><i>R<sub>t</sub></i></ToggleButton>{' '}
        <ToggleButton variant="secondary"><i>R<sub>t</sub></i> (projected) </ToggleButton>
    </ToggleButtonGroup>
    <Map center={[nation.lat, nation.lng]} zoom={nation.zoom}><GeoJSON data={IN} style={style}/></Map>
    </Row>
    <CardColumns fluid>
        <Card class="col-md-8">
            <Card.Header as="h2">Map</Card.Header>
            <Card.Body>
            <Map center={[state.lat, state.lng]} zoom={state.zoom}>
                <TileLayer url = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'/>
                <GeoJSON data={MH} style={style}/>
            </Map>
            </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
        <Card class="col-md-3">
            <Card.Header as="h2">Reproductive rate</Card.Header>
            <Card.Body>
                <Card.Title><Badge variant="danger"><i>R<sub>t</sub></i> = 2.6</Badge>{' '}</Card.Title>
                <LineChart height={100} width={400} data={linechartdata}>
                    <Line type="monotone" dataKey="Rt" stroke="#8884d8" />
                </LineChart>
            </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
    </CardColumns>
    </Container>

    </div></>
  );
}

export default App;
