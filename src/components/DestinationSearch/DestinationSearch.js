import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Form } from 'react-bootstrap';
const DestinationSearch = () => {

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
                                id="datetime-local"
                                label="Next appointment"
                                type="datetime-local"
                                defaultValue="2021-05-24T10:30"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                </Form>
            </div>
        </div>
    );
};

export default DestinationSearch;