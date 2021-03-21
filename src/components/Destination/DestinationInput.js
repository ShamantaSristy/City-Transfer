import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import DestinationSearch from '../DestinationSearch/DestinationSearch';
import RideOptions from '../RideOptions/RideOptions';



const DestinationInput = () => {
    const [searchCase, setSearchCase] = useState(false);

    const handleSearch = () => {
      setSearchCase(!searchCase);
    }

   
    return (
        <div>
            {
                searchCase ? <RideOptions></RideOptions> : <DestinationSearch></DestinationSearch> 
            }
            <div>
                <br/>
            <Button onClick={handleSearch}>Search</Button>
            </div>
        </div>
    );
};

export default DestinationInput;