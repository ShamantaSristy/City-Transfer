import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Destination from '../Destination/Destination';
import Header from '../Header/Header';
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import NoMatch from '../NoMatch/NoMatch';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
            <Router>
                {/* <h3>email : {loggedInUser.email}</h3>
                <h3>name: {loggedInUser.name}</h3> */}
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <LandingPage></LandingPage>
                    </Route>
                    <Route path="/home">
                        <LandingPage></LandingPage>
                    </Route>
                    <PrivateRoute path="/destination/:id">
                        <Destination></Destination>
                    </PrivateRoute>
                    <PrivateRoute exact path="/destination">
                        <Destination></Destination>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="*">
                        <NoMatch></NoMatch>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default Home;