import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
                    <Routes>
                        <Route path='/' exact element={<Home />} />
                        <Route path='/en/chapter-1' element={<EN.Preview />} />
                        <Route path='/ru/chapter-1' element={<RU.Preview />} />
                        <Route path='*' element={<Payment />} />
                    </Routes>
                </BrowserRouter>
            </app.Provider>
        );

    return (
        <app.Provider value={context}>
            <BrowserRouter>
                <Routes>
                    <Route path='/en/chapter-1' element={<EN.Intro />} />
                    <Route path='/en/chapter-2' element={<EN.Functions />} />
                    <Route path='/en/chapter-3' element={<EN.Objects />} />
                    <Route path='/en/chapter-4' element={<EN.Interface />} />
                    <Route path='/en/chapter-5' element={<EN.Repositories />} />
                    <Route path='/en/chapter-6' element={<EN.OnlineSearch />} />
                    <Route path='/en/chapter-7' element={<EN.ComplexSentences />} />
                    <Route path='/en/chapter-8' element={<EN.Storage />} />
                    <Route path='/en/chapter-9' element={<EN.API />} />
                    <Route path='/en/chapter-10' element={<EN.Backend />} />
                    <Route path='/en/chapter-11' element={<EN.Server />} />
                    <Route path='/en/chapter-12' element={<EN.Launch />} />
                    <Route path='/en/handbook' element={<EN.Handbook />} />
                    <Route path='/en/glossary' element={<EN.Glossary />} />

                    <Route path='/ru/chapter-1' element={<RU.Intro />} />
                    <Route path='/ru/chapter-2' element={<RU.Functions />} />
                    <Route path='/ru/chapter-3' element={<RU.Objects />} />
                    <Route path='/ru/chapter-4' element={<RU.Interface />} />
                    <Route path='/ru/chapter-5' element={<RU.Repositories />} />
                    <Route path='/ru/chapter-6' element={<RU.OnlineSearch />} />
                    <Route path='/ru/chapter-7' element={<RU.ComplexSentences />} />
                    <Route path='/ru/chapter-8' element={<RU.Storage />} />
                    <Route path='/ru/chapter-9' element={<RU.API />} />
                    <Route path='/ru/chapter-10' element={<RU.Backend />} />
                    <Route path='/ru/chapter-11' element={<RU.Server />} />
                    <Route path='/ru/chapter-12' element={<RU.Launch />} />
                    <Route path='/ru/handbook' element={<RU.Handbook />} />
                    <Route path='/ru/glossary' element={<RU.Glossary />} />

                    <Route path='*' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </app.Provider>
    );
};

export default App;
