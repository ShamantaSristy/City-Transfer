import React from 'react';
import { Card} from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Cards.css';
const Cards = (props) => {
    const {name, image, id} = props.transport;

    const history = useHistory();

    const getTransport = ((id) => {
        const url = `/destination/${id}`
        history.push(url);
    })

    return (
        <div className="cardDeck" onClick={() => getTransport(id)}>
            <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Cards;