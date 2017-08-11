import React from "react";
import MyHeader from "./header.js";

import Home from "./home.js";
import Search from "./search.js";
import Detail from "./details.js";


import { Route, Switch } from "react-router-dom";
export default class MyApp extends React.Component {


    render() {
        return (
            <div>
                <MyHeader />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={Search} />} />
                     <Route path="/details/:id" component={Detail} />} />
                  </Switch>
                 
            </div>
        )
    }
}