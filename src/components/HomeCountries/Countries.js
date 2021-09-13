import React, { useEffect, useState } from 'react';
import { Flag } from '../Flag';

import '../../styles/HomeCountries/CountriesStyle.css';

export const Countries = () => {
    
    const url = 'https://restcountries.eu/rest/v2/all';
    const [countries, setCountries] = useState([]);
        
    //Hacer algon con la paginacion

    //intento sepa
    // const [pages, setPages] = useState([])
    // const [pointer] = useState(0)

    // const pagination = ( arr ) => {
    //     const a =[]

    //     for( let i=0; i<arr.length; i+=20 ){
    //         a.push( arr.slice( i, i+20 ) );
    //     }

    //     return a;
    // }

    // {
    //     setPages( pagination(data) )
    //     setCountries( pages[pointer] );
    // }

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
