import React, { Component } from "react";
import Header from "./components/layout/Header.js";
import Footer from "./components/layout/Footer.js";
import HomePage from "./components/layout/HomePage.js";
import LyricPage from "./components/layout/LyricPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PageContext from './Context.js';

import "./App.css";
import "./components/css/Header.css";

import { ContextProvider } from "./Context";

class App extends Component {
    render() {
        console.log(`${process.env.REACT_APP_MM_KEY}`);
        return (
            <Router>
                <Header />
                <ContextProvider>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/lyrics/track/:id" component={LyricPage} />
                    </Switch>
                </ContextProvider>
                <Footer />
            </Router>
        );
    }
}
const Container = props => {
    return (
        <div
            className={`${props.name}-container`}
            style={{ "background-color": `${props.background}` }}
        >
            {props.children}
        </div>
    );
};

export default App;
export { Container };
