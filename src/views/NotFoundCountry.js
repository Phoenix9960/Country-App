import React from 'react';

import '../styles/NotFoundCountry/NotFoundStyle.css'

export const NotFoundCountry = () => {
    return (
        <div className="NotFoundPage" >
            <h1 className="errorNumber" >404</h1>
            <h1>Country Not Found</h1>

            <h3>Oops!</h3>
            <h3>you found a Dead Link</h3>
            <img 
                src="https://www.pngkit.com/png/full/336-3365446_view-samegoogleiqdbsaucenao-404-oops-you-found-a-dead.png"
                alt="Dead Link"
            />
        </div>
    )
}
