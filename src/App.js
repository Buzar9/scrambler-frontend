import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import MorsPage from "./pages/mors/mors-page.component";
import PangramPage from "./pages/pangram/pangram-page.component";
import SylabicPage from "./pages/sylabic/sylabic-page.component";

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cipher: null
        }
    }

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/pangram' component={PangramPage} /> />
                    <Route path='/mors' component={MorsPage} />
                    <Route path='/sylabic' component={SylabicPage} />
                </Switch>
            </div>
        )
    }
}

export default App;
