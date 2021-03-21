import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import DestinationSearch from '../DestinationSearch/DestinationSearch';
import RideOptions from '../RideOptions/RideOptions';
import { useParams } from 'react-router';
import fakeData from '../../fakedata/fakedata.json'

const DestinationInput = () => {
    const { id } = useParams();
    console.log(fakeData);
    const [vehicle, setVehicle] = useState([]);
    useEffect(() => {
        setVehicle(fakeData);
    }, []);

    const vehicleInfo = vehicle?.find(pd => pd.id === id);

    const [searchCase, setSearchCase] = useState(true);

    const handleSearch = () => {
        setSearchCase(!searchCase);
    }

    return (
        <div>

            {
                searchCase ? <DestinationSearch></DestinationSearch> : <RideOptions vehicleInfo={vehicleInfo}></RideOptions>
            }
            <div>
                <br />
                <Button onClick={handleSearch}>{searchCase ? "Search" : "Done" }</Button>
            </div>
        </div>
    );
};

export default DestinationInput;