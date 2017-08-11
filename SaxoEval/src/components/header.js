import React from 'react';
import { NavLink } from "react-router-dom";

export default class MyHeader extends React.Component {
    render() {
        return (

            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">

                    </div>
                    <ul className="nav navbar-nav">
                        <li ><NavLink exact activeStyle={{ color: 'black', textDecoration:  'none' }} to="/">Home <span className="sr-only">(current)</span></NavLink></li>
                        <li><NavLink activeStyle={{ color: 'black', textDecoration:  'none' }} to="/search">Search</NavLink></li>
                        <li><NavLink activeStyle={{ color: 'black', textDecoration:  'none' }} to="/details">Details</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }

} 
