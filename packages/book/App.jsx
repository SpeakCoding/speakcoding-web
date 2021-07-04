import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAPI, useCourses } from './tools';
import { app } from './tools/app';
import Home from './Home';
import Login from './auth';
import Payment from './payment';
import * as EN from './en';
import * as RU from './ru';

// FIXME: remove it when no longer needed
const admin = localStorage.getItem('admin');

const App = () => {
    const fetch = useAPI(),
        auth = !!localStorage.getItem('book_auth_token'),
        [profile, setProfile] = useState(null),
        { courses, defaultCourse, loadCourses, updateCourse } = useCourses();

    const updateProfile = async payload => {
        const { data } = await fetch('/users/me.json', {
            method: 'PUT',
            body: { user: payload }
        });
        setProfile(data);
    };

    const context = useMemo(
        () => ({
            profile,
            updateProfile,
            courses,
            updateCourse
        }),
        [profile, courses]
    );

    const initProfile = async () => {
        const [{ data }] = await Promise.all([
            fetch('/users/me.json', { method: 'GET' }),
            loadCourses()
        ]);

        if (!data) {
            localStorage.removeItem('book_auth_token');
            window.location.reload();
            return;
        }

        if (data.last_course_id) setProfile(data);
        else updateProfile({ last_course_id: defaultCourse });
    };

    useEffect(() => {
        if (auth && !profile) initProfile();
    }, [auth, profile]);

    if (!auth) return <Login onSuccess={initProfile} />;
    if (!profile) return null;
    if (!profile.is_paid) return <Payment />;

    return (
        <app.Provider value={context}>
            <BrowserRouter>
                <Switch>
                    <Route path='/en/chapter-1' component={EN.Intro} />
                    <Route path='/en/chapter-2' component={EN.Functions} />
                    <Route path='/en/chapter-3' component={EN.Objects} />
                    <Route path='/en/chapter-4' component={EN.Interface} />
                    <Route path='/en/chapter-5' component={EN.Repositories} />
                    <Route path='/en/chapter-6' component={EN.ComplexSentences} />
                    <Route path='/en/chapter-7' component={EN.OnlineSearch} />
                    <Route path='/en/chapter-8' component={EN.Storage} />
                    <Route path='/en/chapter-9' component={EN.API} />
                    {admin && <Route path='/en/chapter-10' component={EN.Backend} />}
                    <Route path='/en/glossary' component={EN.Glossary} />

                    <Route path='/ru/chapter-1' component={RU.Intro} />
                    <Route path='/ru/chapter-2' component={RU.Functions} />
                    <Route path='/ru/chapter-3' component={RU.Objects} />
                    <Route path='/ru/chapter-4' component={RU.Interface} />
                    <Route path='/ru/chapter-5' component={RU.Repositories} />
                    <Route path='/ru/chapter-6' component={RU.ComplexSentences} />
                    <Route path='/ru/chapter-7' component={RU.OnlineSearch} />
                    <Route path='/ru/chapter-8' component={RU.Storage} />
                    <Route path='/ru/chapter-9' component={RU.API} />
                    {admin && <Route path='/ru/chapter-10' component={RU.Backend} />}
                    {admin && <Route path='/ru/chapter-11' component={RU.Server} />}
                    <Route path='/ru/glossary' component={RU.Glossary} />

                    <Route component={Home} />
                </Switch>
            </BrowserRouter>
        </app.Provider>
    );
};

export default App;
