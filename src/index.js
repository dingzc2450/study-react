import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{ Product0 as Product ,Product as Pro} from'./product';
import {BrowserRouter as Router ,Route,Switch } from'react-router-dom';
import {Hello1 as Hello} from'./Hello'
// ReactDOM.render(<div></div>,document.getElementById('root'));




 ReactDOM.render((
    <Router>
     <Switch>

        <Route exact path="/" component={App}/>
        <Route path="/product" component={Product}/>
        <Route path="/product/:content" component={Product}/>
        </Switch>
        
    </Router>
),document.body);