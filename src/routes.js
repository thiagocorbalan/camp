import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import Admin from './pages/Admin';


export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exatc component={Main}></Route>
            <Route path="/admin" exact component={Admin}></Route>
        </BrowserRouter>
    )

}