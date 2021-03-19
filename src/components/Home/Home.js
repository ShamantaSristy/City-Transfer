import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';

const Home = () => {
    return (
        <div>
            <Router>
                <Header></Header>
                <Switch>
                    <Route path="/">
                        <LandingPage></LandingPage>
                    </Route>
                    <Route path="/home">
                        <LandingPage></LandingPage>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Home;