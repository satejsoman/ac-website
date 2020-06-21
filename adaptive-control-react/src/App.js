import React from 'react';
import './App.css';
import {Row,Col} from 'react-bootstrap'
import Header from './components/Header.js';
import {NationalMap,state_codes} from "./components/Maps.js"

// import Dropdown from 'react-bootstrap/Dropdown'
// import DropdownButton from 'react-bootstrap/DropdownButton'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'
import Badge from 'react-bootstrap/Badge'
import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
// import {LineChart, Line} from 'recharts'

// import { Map, GeoJSON, TileLayer } from 'react-leaflet'

// import MH from "./data/MH.json"

// import './App.scss';


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
    <Header />

    <Container fluid>
    <Row>
    <Col sm={8}>
    <Card>
        <Card.Header as="h2">Map</Card.Header>
        <Card.Body>
        <div>
        <Form>
        <Row>
        <Col>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Geography</Form.Label>
            <Form.Control as="select" size="sm" custom>
            <option value="IN">All India</option>
            <optgroup label="States">{
                Object.keys(state_codes).map((key, index) => ( 
                    <option value={key}>{state_codes[key]}</option>
                ))
            }
            </optgroup>
            </Form.Control>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
            <Form.Label>Visualization</Form.Label>
            <Form.Control as="select" size="sm" custom>
            <optgroup label="Maps">
            <option>Status</option>
            <option>Reproductive rate</option>
            <option>Infection rate</option>
            <option>Active infections</option>
            <option>Death rate</option>
            <option>Deaths</option>
            </optgroup>
            <optgroup label = "Plots">
            <option>Reproductive rate</option>
            <option>Infection rate</option>
            <option>Active infections</option>
            <option>Death rate</option>
            <option>Deaths</option>
            </optgroup>
            </Form.Control>
        </Form.Group>
        </Col>
        </Row>
        </Form>
            {/* <InputGroup>
            </InputGroup> */}
    </div>
        <NationalMap />
        </Card.Body>
    </Card>
        
    </Col>
    <Col sm={4}>
    <Card>
        <Card.Header as="h2">Definitions</Card.Header>
        <Card.Body>
            <Card.Title><Badge variant="danger"><i>R<sub>t</sub></i> = 2.6</Badge>{' '}</Card.Title>
        </Card.Body>
    </Card>
    <Card>
        <Card.Header as="h2">Technobabble</Card.Header>
        <Card.Body>
            <Card.Title><Badge variant="info">gamma prior!</Badge>{' '}</Card.Title>
        </Card.Body>
    </Card>
    </Col>
  </Row>
    </Container>

    </div>
    </>
  );
}

export default App;
