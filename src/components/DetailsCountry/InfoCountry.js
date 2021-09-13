import React from 'react';

import '../../styles/DetailsCountry/DetailsStyle.css';

export const InfoCountry = ({ name, capital, continent, imgFlag, languages }) => {

    console.log(languages)
    return (
        <div>
            <img
                src={ imgFlag }
                alt={`Flag of ${name}`}
            />
            <h2 className="nameCountry" >{ name }</h2>
            <p>{`Capital: ${capital}`}</p>
            <p>{`Region: ${continent}`}</p>
            <p>{`Se hablan ${ languages.length } lenguaje(s)`}</p>
            <ul>
                {
                    languages &&
                    languages.map( ({ name, iso639_2 }) => (
                        <li key={iso639_2} >{name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
