import React from 'react';
import { Card } from 'react-bootstrap';

const CovinTeam = _ => (
    <Card>
        <Card.Header as="h2">COVIN Team</Card.Header>
        <Card.Body>
        <p>
        The COVIN team is a group of academics from a number of universities (University of Chicago, MIT, Duke, Stanford, among others) that came together after the COVID pandemic struck to develop models and do empirical work to support the response to COVID in India.  
        </p>
        <p>
        The parameter estimation and adaptive control model is built on work done by <a href="https://twitter.com/bettencourtluis">Luis Bettencourt</a>, <a href="https://twitter.com/satejsoman">Satej Soman</a>, and <a href="http://www.anupmalani.com/">Anup Malani</a> at the University of Chicago, with critical inputs from David Kaiser, Jon Gruber, and Stuti Sachdeva at MIT; Vaidehi Tandel at IDFC Institute; Manoj Mohanan at Dukel and many others.  It benefitted from critical feedback from Bhramar Mukherjee at University of Michigan and data analysis by Clement Imbert at Warwick and Sam Asher at Johns Hopkins.  Devavrat Shah and his students at MIT played a critical role in validating our SIR model against a model that used their synthetic intervention methods.
        </p>
        <p>
        Additional analysis, visualization, and engineering was done by Nico Marchio, Manasi Phadnis, Caitlin Loftus, Ananya Karanam, and Thomas Weil (all at the University of Chicago).   
        </p>
        </Card.Body>
    </Card>
)

export default CovinTeam;