import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// IMPORTING PAGES
import Home from './views/home/Home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;