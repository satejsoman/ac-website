import React, { Component } from 'react';
import './App.css';
import {Row,Col} from 'react-bootstrap'
import Header from './components/Header.js';
import {NationalMap, state_codes} from "./components/Maps.js"
import { Details } from "./components/Details.js";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
// import {LineChart, Line} from 'recharts'


export default class App extends Component {
    state = { 
        vizType : "statusmap",
        geography : "IN"
    };

    render() {
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
                {/* <Card.Header as="h2">Map</Card.Header> */}
                <Card.Body>
                <div>
                <Form>
                <Row>
                <Col>
                <Form.Group controlId="geoForm">
                    <Form.Label>Geography</Form.Label>
                    <Form.Control as="select" size="lg" custom onChange = {(e) => {
                        this.setState({geography: e.target.value});
                        console.log("fc set state")
                        console.log(this)
                        console.log(this.state.geography)
                    }}>
                    <option value="IN">All India</option>
                    <optgroup label="States">{
                        Object.keys(state_codes).map((key) => ( 
                            <option value={key}>{state_codes[key]}</option>
                        ))
                    }
                    </optgroup>
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="vizForm">
                    <Form.Label>Visualization</Form.Label>
                    <Form.Control as="select" size="lg" custom onChange = {(e) => {this.setState({vizType: e.target.value})}}>
                    <optgroup label="Maps">
                    <option value="statusmap">Status</option>
                    <option value="rtmap">Reproductive rate</option>
                    {/* <option>Infection rate</option> */}
                    <option value="Itmap">Active infections</option>
                    {/* <option>Death rate</option> */}
                    {/* <option>Deaths</option> */}
                    </optgroup>
                    <optgroup label = "Plots">
                    <option value="rtplot">Reproductive rate</option>
                    {/* <option>Infection rate</option> */}
                    <option value="Itplot">Active infections</option>
                    {/* <option>Death rate</option> */}
                    {/* <option>Deaths</option> */}
                    </optgroup>
                    </Form.Control>
                </Form.Group>
                </Col>
                </Row>
                </Form>
                    {/* <InputGroup>
                    </InputGroup> */}
            </div>
                <NationalMap geokey={this.state.geography}/>
                </Card.Body>
            </Card>
                
            </Col>
            <Col sm={4}>
            <Card>
                <Card.Header as="h1">Details</Card.Header>
                <Card.Body>
                <Details viztype={this.state.vizType} geography={this.state.geography}/>
                </Card.Body>
            </Card>
            <br></br>
            </Col>
          </Row>
            </Container>
        
            </div>
            </>
          );
        }
    }
