import React, { useState } from 'react';
import { FormCountry } from '../components/SearchingCountry/FormCountry';
import { Flag } from '../components/Flag';
import { NotFoundCountry } from './NotFoundCountry';

export const SearchingCountry = () => {

    const [countryData, setCountryData] = useState([]);
    const [name, setName] = useState(null);
    const [err, setErr] = useState(false);

    const handleCountryData =  async () => {
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
            const result = await response.json();
            if( result.status ){
                setErr( true );
            } else {
                setErr( false );
                setCountryData( result );
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="SearchinPage" >
            <FormCountry 
                setName={ setName }
                handleCountryData={ handleCountryData }
            />
            {
            (err)
            ?
                <NotFoundCountry />
            :
                <div>
                    {
                        countryData && 
                        countryData.map( ({name, flag, alpha2Code}, idx) => 
                            <Flag key={idx} name={name} flagImg={flag} code={alpha2Code} />
                        )
                    }
                </div>
            }
        </div>
    )
}
