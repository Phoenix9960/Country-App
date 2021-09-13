import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { InfoCountry } from '../components/DetailsCountry/InfoCountry';

export const DetailsCountry = () => {

    const {code} = useParams();
    const [detailsCountry, setDetailsCountry] = useState({})
    const {name, capital, region, flag, alpha2Code, languages} = detailsCountry;

    const handleDetailsCountry = async() => {

        try {
            const response =await fetch(`https://restcountries.eu/rest/v2/alpha/${code}`);
            const result =await response.json();
    
            setDetailsCountry( result );    
        } catch (error) {
            console.error( error );
        }
    }

    useEffect( () => {

        handleDetailsCountry();
    }, [])

    console.log(detailsCountry);

    return (
        <div className="DetailsPage">
            {
                detailsCountry &&
                <InfoCountry name={name} capital={capital} continent={region} imgFlag={flag} code={alpha2Code} languages={languages} />
            }
        </div>
    )
}
