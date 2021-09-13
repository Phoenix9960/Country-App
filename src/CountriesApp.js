import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { HomeCountries } from './views/HomeCountries';
import { SearchingCountry } from './views/SearchingCountry';
import { DetailsCountry } from './views/DetailsCountry'
import { NotFoundCountry } from './views/NotFoundCountry';


export const CountriesApp = () => {
    return (
        <Router>
            <NavBar />

            <Switch>
                <Route exact path="/" >
                    <HomeCountries />
                </Route>
                <Route exact path="/search" >
                    <SearchingCountry />
                </Route>
                <Route path="/details/:code" >
                    <DetailsCountry />
                </Route>
                <Route path="" >
                    <NotFoundCountry />
                </Route>
            </Switch>
        </Router>
    )
}
