import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAPI } from './tools';
import Home from './Home';
import Login from './auth/Login';
import * as EN from './en';
import * as RU from './ru';

const App = () => {
    const fetch = useAPI(),
        auth = !!localStorage.getItem('book_auth_token'),
        [profile, setProfile] = useState(null);

    const initProfile = async () => {
        const { data } = await fetch('/users/me.json', { method: 'GET' });
        setProfile(data);
    };

    useEffect(() => {
        if (auth) initProfile();
    }, [auth]);

    // if (!auth) return <Login onSuccess={initProfile} />;
    // if (!profile) return null;

    return (
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
};

export default App;
