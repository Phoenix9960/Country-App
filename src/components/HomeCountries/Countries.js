import React, { useEffect, useState } from 'react';
import { Flag } from '../Flag';

import '../../styles/HomeCountries/CountriesStyle.css';

export const Countries = () => {
    
    const url = 'https://restcountries.eu/rest/v2/all';
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch( url )
        .then( resp => resp.json() )
        .then( data => setCountries( data.slice( 0,20 )))
    }, []);


    return (
        <div className="FlagsGrid" >
            {
                countries &&
                countries.map(({name, flag, alpha2Code}, idx) => (
                    <Flag key={idx} name={name} flagImg={flag} code={alpha2Code}  />
                ))
            }
        </div>
    )
}
