import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './DestinationInput';
import DestinationInput from './DestinationInput';
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}><DestinationInput></DestinationInput></Col>
                <Col sm={8}><GoogleMap></GoogleMap></Col>
            </Row>
        </Container>
    );
};

export default Destination;