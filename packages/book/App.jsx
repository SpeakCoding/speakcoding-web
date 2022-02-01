import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAPI, useCourses } from './tools';
import { app } from './tools/app';
import { fixLang } from './tools/system';
import { parseProfile } from './tools/profile';
import Home from './Home';
import Login from './auth';
import Payment from './payment';
import * as EN from './en';
import * as RU from './ru';

// FIXME: remove it when no longer needed
const admin = localStorage.getItem('admin');

let forcedLang;

const App = () => {
    const api = useAPI(),
        auth = !!localStorage.getItem('book_auth_token'),
        [profile, setProfile] = useState(null),
        { courses, loadCourses, updateCourse } = useCourses(),
        [ready, setReady] = useState(false);

    const updateProfile = async payload => {
        const { data } = await api.put('/users/me.json', { user: payload });
        setProfile(parseProfile(data));
    };

    const context = useMemo(
        () => ({
            profile,
            updateProfile,
            courses,
            updateCourse,
            admin
        }),
        [profile, courses]
    );

    const initProfile = async () => {
        const [{ data }] = await Promise.all([api.get('/users/me.json'), loadCourses()]);

        if (!data) {
            localStorage.removeItem('book_auth_token');
            window.location.reload();
            return;
        }

        if (forcedLang) updateProfile({ last_course_id: forcedLang });
        else {
            const lang = fixLang(data.last_course_id);
            localStorage.setItem('lang', lang);
            if (data.last_course_id === lang) setProfile(parseProfile(data));
            else updateProfile({ last_course_id: lang });
        }
    };

    useEffect(() => {
        const [, param] = window.location.pathname.split('/');
        if (param && param === fixLang(param)) {
            forcedLang = param;
            localStorage.setItem('lang', param);
        }
        setReady(true);
    }, []);

    useEffect(() => {
        if (auth && !profile) initProfile();
    }, [auth, profile]);

    if (!ready || (auth && !profile)) return null;

    if (!auth) return <Login onSuccess={initProfile} />;

    if (!profile.is_paid)
        return (
            <app.Provider value={context}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/en/chapter-1' component={EN.Preview} />
                        <Route path='/ru/chapter-1' component={RU.Preview} />
                        <Route component={Payment} />
                    </Switch>
                </BrowserRouter>
            </app.Provider>
        );

    return (
        <app.Provider value={context}>
            <BrowserRouter>
                <Switch>
                    <Route path='/en/chapter-1' component={EN.Intro} />
                    <Route path='/en/chapter-2' component={EN.Functions} />
                    <Route path='/en/chapter-3' component={EN.Objects} />
                    <Route path='/en/chapter-4' component={EN.Interface} />
                    <Route path='/en/chapter-5' component={EN.Repositories} />
                    <Route path='/en/chapter-6' component={EN.OnlineSearch} />
                    <Route path='/en/chapter-7' component={EN.ComplexSentences} />
                    <Route path='/en/chapter-8' component={EN.Storage} />
                    <Route path='/en/chapter-9' component={EN.API} />
                    <Route path='/en/chapter-10' component={EN.Backend} />
                    <Route path='/en/chapter-11' component={EN.Server} />
                    <Route path='/en/chapter-12' component={EN.Launch} />
                    <Route path='/en/handbook' component={EN.Handbook} />
                    <Route path='/en/glossary' component={EN.Glossary} />

                    <Route path='/ru/chapter-1' component={RU.Intro} />
                    <Route path='/ru/chapter-2' component={RU.Functions} />
                    <Route path='/ru/chapter-3' component={RU.Objects} />
                    <Route path='/ru/chapter-4' component={RU.Interface} />
                    <Route path='/ru/chapter-5' component={RU.Repositories} />
                    <Route path='/ru/chapter-6' component={RU.OnlineSearch} />
                    <Route path='/ru/chapter-7' component={RU.ComplexSentences} />
                    <Route path='/ru/chapter-8' component={RU.Storage} />
                    <Route path='/ru/chapter-9' component={RU.API} />
                    <Route path='/ru/chapter-10' component={RU.Backend} />
                    <Route path='/ru/chapter-11' component={RU.Server} />
                    <Route path='/ru/chapter-12' component={RU.Launch} />
                    <Route path='/ru/handbook' component={RU.Handbook} />
                    <Route path='/ru/glossary' component={RU.Glossary} />

                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        </app.Provider>
    );
};

export default App;
