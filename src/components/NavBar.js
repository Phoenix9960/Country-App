import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand" >Countries-app</span>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink  activeClassName="active" className="nav-link" exact to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="nav-link" exact to="/search">Search</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
