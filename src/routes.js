import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// IMPORTING PAGES
import Home from './views/home/Home';
import AreaLogada from './views/areaLogada/AreaLogada';
import MeusDados from './views/meusDados/MeusDados';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/arealogada" component={AreaLogada}/>
            <Route path="/meusdados" component={MeusDados}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;