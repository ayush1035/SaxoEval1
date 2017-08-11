import MyApp from './components/app.js';
import ReactDom from 'react-dom';
import React from 'react';
import '../public/style.css';
import { BrowserRouter as Router } from "react-router-dom";


ReactDom.render(
    <Router forceRefresh>
        <div>
            <MyApp />
        </div>
    </Router>

    , document.getElementById('container')
)
