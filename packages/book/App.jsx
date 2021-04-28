import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAPI } from './tools';
import { app } from './tools/app';
import { getDefaultCourse } from './tools/course';
import Home from './Home';
import Login from './auth/Login';
import * as EN from './en';
import * as RU from './ru';

const App = () => {
    const fetch = useAPI(),
        auth = !!localStorage.getItem('book_auth_token'),
        [profile, setProfile] = useState(null);

    const context = useMemo(() => ({ profile }), [profile]);

    const initProfile = async () => {
        const { data } = await fetch('/users/me.json', { method: 'GET' });

        if (!data.last_course_id) {
            data.last_course_id = getDefaultCourse();
            fetch('/users/me.json', {
                method: 'PUT',
                body: { user: { last_course_id: data.last_course_id } }
            });
        }

        setProfile(data);
    };

    useEffect(() => {
        if (auth && !profile) initProfile();
    }, [auth, profile]);

    if (!auth) return <Login onSuccess={initProfile} />;
    if (!profile) return null;

    return (
        <app.Provider value={context}>
            <BrowserRouter>
                <Switch>
                    <Route path='/en/chapter-1' component={EN.Intro} />
                    <Route path='/en/glossary' component={EN.Glossary} />
                    <Route path='/ru/chapter-1' component={RU.Intro} />
                    <Route path='/ru/glossary' component={RU.Glossary} />
                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        </app.Provider>
    );
};

export default App;
