import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import MorsPage from "./pages/mors/mors-page.component";
import PangramPage from "./pages/pangram/pangram-page.component";
import SylabicPage from "./pages/sylabic/sylabic-page.component";
import NotFoundPage from "./pages/not-found/not-found-page.component";

import './App.css';

const App = () => (

    <>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/pangram' component={PangramPage}/> />
            <Route exact path='/mors' component={MorsPage}/>
            <Route exact path='/sylabic' component={SylabicPage}/>
            <Route exact path='/404' component={NotFoundPage}/>
            <Redirect path={'*'} to='/404' />
        </Switch>
    </>
)

export default App;
