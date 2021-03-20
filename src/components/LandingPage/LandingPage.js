import React, { useEffect, useState } from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import fakeData from '../../fakedata/fakedata.json';
import Cards from '../Cards/Cards';
import './LandingPage.css';

const LandingPage = () => {

    const [transports, setTransport] = useState([]);
    useEffect(() => {
        setTransport(fakeData);
    },[]);

    return (
        <div className="landing">
          <CardDeck>
             {
                transports.map(transport => <Cards transport={transport}></Cards>)
             }
          </CardDeck>
        </div>
    );
};

export default LandingPage;