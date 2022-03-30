import React from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryName} = useParams({});
    return (
        <div>
            <h2>This is my country:{countryName}</h2>
        </div>
    );
};

export default Country;