import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './DestinationInput';
import DestinationInput from './DestinationInput';
import map from '../../assets/map.png';

const Destination = () => {
    return (
        <Container>
            <Row>
                <Col sm={4}><DestinationInput></DestinationInput></Col>
                <Col sm={8}><Image style={{marginTop :'5vh'}} src={map} fluid/></Col>
            </Row>
        </Container>
    );
};

export default Destination;