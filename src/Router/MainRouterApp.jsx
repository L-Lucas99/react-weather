import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Home } from '../components/Home/Home';
import { city } from '../components/Location/City';
import { NavBar } from '../components/UI/NavBar';
export const MainRouterApp = () => {
    return (
        <Router>
            <NavBar/>
            <div>
                <Switch>
                    <Route exact path='/location/:id' component={city}/>
                    <Route  path='/' component={Home}/>
                </Switch>
            </div>
        </Router>
    )
}
