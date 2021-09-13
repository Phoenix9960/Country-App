import React from 'react';
import { Link } from 'react-router-dom';

export const Flag = ({ name, flagImg, code }) => {
    return (
        <div className="flagsItem" >
            <h3>{ name }</h3>
            <Link to={`/details/${code}`} >
                <img 
                    src={ flagImg }
                    alt={ `Flag of the country ${name}` }
                />
            </Link>
        </div>
    )
}