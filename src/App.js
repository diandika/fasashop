import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import ProductDetail from "./components/product-detail.component";
import FrontPage from "./components/front-page.component";
import './App.css';

import logo from "./components/img/icon.png";
import {Helmet} from "react-helmet";

class App extends Component{
  render(){
    return(
      <Router>
        <Helmet>
          <link rel="icon" href={logo} type="image/png"/>
          <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
              integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
              crossOrigin="anonymous"
          />
          <title>Fasashop</title>
        </Helmet>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <Link to="/" className="navbar-brand">
              <img src={logo} width="30" height="30" alt="fasashop"/>Fasashop Catalog
            </Link>
          </nav>
          <br/>
          <div className="container">
            <Route path="/" exact component={FrontPage} />
            <Route path="/p" component={ProductDetail} />
            <Route path="/create" component={CreateTodo} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
