import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import * as EN from './en';
import * as RU from './ru';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/en/chapter-1' component={EN.Intro} />
            <Route path='/en/glossary' component={EN.Glossary} />
            <Route path='/ru/chapter-1' component={RU.Intro} />
            <Route path='/ru/glossary' component={RU.Glossary} />
        </Switch>
    </BrowserRouter>
);

export default App;
