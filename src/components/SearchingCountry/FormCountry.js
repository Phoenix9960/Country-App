import React from 'react';

import '../../styles/searching/FormStyle.css';

export const FormCountry = ({ setName, handleCountryData }) => {

    const handleSubmit = ( e ) => {
        e.preventDefault();

        handleCountryData()
    }

    return (
        <form onSubmit={ handleSubmit } >
        <div >
            <label className="form-label">Country Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Write the name of country"
                    onChange={ (e) => {
                        setName( e.target.value )
                    }}
                />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
    </form>
    )
}
