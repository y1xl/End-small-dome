import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import Layouts from 'component/layout/index.jsx'
import Home from 'page/home/index.jsx';
import ErrorPage from 'page/error/index.jsx';

export default class AppRouter extends React.Component{
    render(){
        let LayoutRouter = (
            <Layouts>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layouts>
        );
        return (
            <Router>
                <Switch>
                    {/* <Route path="/login" component={Login}/> */}
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
  }