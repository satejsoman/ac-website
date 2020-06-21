import React from 'react';
import {Row,Col} from 'react-bootstrap'
import {NationalMap, state_codes} from "./Maps.js"
import { Details } from "./Details.js";

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'


export default class Home extends React.Component { 
    state = { 
        vizType : "statusmap",
        geography : "IN"
    };

    render() {
        return (<>    
        <Row>
            <Col>
            <Card className="bg-dark text-white text-center">
                <Card.Body>
                <Card.Title className="text-white"> Adaptive Control of COVID-19 in India </Card.Title>
                <Card.Subtitle className="text-secondary"> Tracking COVID-19 and recommending control efforts across states in India.</Card.Subtitle>
                </Card.Body>
            </Card>
            </Col>
        </Row>
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
                <Form.Label as="h2">Geography</Form.Label>
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
                <Form.Label as="h2">Visualization</Form.Label>
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
        </>)
    }
}