import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <Router>
                <Header></Header>
                {this.showPage(routes)}
                <Footer></Footer>
            </Router>
        );
    }
    showPage = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
}
export default App;
