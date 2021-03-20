import { TextField } from '@material-ui/core';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
// import AvailableRide from '../AvailableRide/AvailableRide';


const DestinationInput = () => {

    const handleSearch = () => {
       console.log('clicked');
    }

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));

    const classes = useStyles();
    return (
        <div>
            <div style={{ marginTop: '5vh' }}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>From</Form.Label> */}
                    <Form.Control type="text" placeholder="From where" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    {/* <Form.Label>Destination</Form.Label> */}
                    <Form.Control type="text" placeholder="Destination" />
                </Form.Group>

                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        label="Booking Date"
                        type="date"
                        defaultValue="2021-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </Form>
        </div>
        <Button onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default DestinationInput;