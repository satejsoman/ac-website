import React from "react";

import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { state_codes } from "./components/Plots.js";
import { Details } from "./components/Details.js";
import "./App.css";

const cardHeader = (name) => (
  <Card.Header as="h2" class="card-header bg-light border-dark">
    {name}
  </Card.Header>
);

export default class App extends React.Component {
  state = {
    vizType: "statusmap",
    geography: "IN",
  };

  render() {
    return (
      <>
        <div className="App container">
          <Row>
            <Col>
              <Card className="bg-dark text-white text-center">
                <Card.Header as="h1" className="bg-dark text-white text-center">
                  {" "}
                  Adaptive Control of COVID-19 in India{" "}
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle as="h3" className="text-secondary">
                    {" "}
                    Tracking COVID-19 and recommending control efforts across states in India.
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Card id="viz_box">
                {cardHeader("Analysis")}
                <Card.Body>
                  <div>
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group controlId="geoForm">
                            <Form.Label as="h3" className="text-dark">
                              Geography
                            </Form.Label>
                            <Form.Control
                              as="select"
                              size="lg"
                              custom
                              onChange={(e) => {
                                this.setState({ geography: e.target.value });
                              }}>
                              <option value="IN">All India</option>
                              <optgroup label="States">
                                {Object.keys(state_codes).map((key) => (
                                  <option value={key}>{state_codes[key]}</option>
                                ))}
                              </optgroup>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="vizForm">
                            <Form.Label as="h3" className="text-dark">
                              Visualization
                            </Form.Label>
                            <Form.Control
                              as="select"
                              size="lg"
                              custom
                              onChange={(e) => {
                                this.setState({ vizType: e.target.value });
                              }}>
                              <optgroup label="Maps">
                                <option value="statusmap">Adaptive Control Status</option>
                                <option value="rtmap">Reproductive rate</option>
                                <option value="Itmap">Active infections</option>
                              </optgroup>
                              <optgroup label="Plots">
                                <option value="rtplot">Reproductive rate</option>
                                <option value="Itplot">Active infections</option>
                              </optgroup>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                  <div>here is a map</div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card id="detail_box">
                {cardHeader("Details")}
                <Card.Body>
                  <Details viztype={this.state.vizType} geography={this.state.geography} />
                </Card.Body>
              </Card>
              <br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                {cardHeader("COVIN Team")}
                <Card.Body>
                  <p>
                    The COVIN team is a group of academics from a number of universities (University of Chicago, MIT, Duke, Stanford, among others) that came
                    together after the COVID pandemic struck to develop models and do empirical work to support the response to COVID in India.
                  </p>
                  <p>
                    The parameter estimation and adaptive control model is built on work done by{" "}
                    <a href="https://twitter.com/bettencourtluis">Luis Bettencourt</a>, <a href="https://twitter.com/satejsoman">Satej Soman</a>, and{" "}
                    <a href="http://www.anupmalani.com/">Anup Malani</a> at the University of Chicago, with critical inputs from David Kaiser, Jon Gruber, and
                    Stuti Sachdeva at MIT; Vaidehi Tandel at IDFC Institute; Manoj Mohanan at Duke; and many others. It benefited from critical feedback from
                    Bhramar Mukherjee at University of Michigan and data analysis by Clement Imbert at Warwick and Sam Asher at Johns Hopkins. Devavrat Shah and
                    his students at MIT played a critical role in validating our SIR model against a model that used their synthetic intervention methods.
                  </p>
                  <p>
                    Additional analysis, visualization, and engineering was done by Nico Marchio, Manasi Phadnis, Caitlin Loftus, Ananya Karanam, and Thomas
                    Weil (all at the University of Chicago).
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                {cardHeader("Data Sources")}
                <Card.Body>
                  <p>
                    The testing, case, deaths data for Indian reported on this website and used by our model is drawn from{" "}
                    <a href="www.covid19india.org">Covid19India</a>.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                {cardHeader("Methods")}
                <Card.Body>
                  <p>
                    The methods used to forecast infections and reproductive rate, as well as recommendations for control, are described in detail in
                    WHITEPAPER.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
