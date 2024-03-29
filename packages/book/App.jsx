import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAPI, useCourses } from './tools';
import { app } from './tools/app';
import { fixLang } from './tools/system';
import { parseProfile } from './tools/profile';
import Home from './Home';
import Login from './auth';
import * as EN from './en';
import * as RU from './ru';

let forcedLang;

const App = () => {
    const api = useAPI(),
        auth = !!localStorage.getItem('book_auth_token'),
        [profile, setProfile] = useState(null),
        { courses, loadCourses, updateCourse } = useCourses(),
        [ready, setReady] = useState(false);

    const updateProfile = async payload => {
        const { data } = await api.put('/users/me.json', { user: payload });
        if (data) setProfile(parseProfile(data));
    };

    const context = useMemo(
        () => ({
            profile,
            updateProfile,
            courses,
            updateCourse,
            admin: profile?.group?.title === 'Admins'
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

    if (!auth)
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='*' element={<Login onSuccess={initProfile} />} />
                </Routes>
            </BrowserRouter>
        );

    return (
        <app.Provider value={context}>
            <BrowserRouter>
                <Routes>
                    <Route path='/en'>
                        <Route path='chapter-1' element={<EN.Intro />} />
                        <Route path='chapter-2' element={<EN.Functions />} />
                        <Route path='chapter-3' element={<EN.Objects />} />
                        <Route path='chapter-4' element={<EN.Interface />} />
                        <Route path='chapter-5' element={<EN.Repositories />} />
                        <Route path='chapter-6' element={<EN.OnlineSearch />} />
                        <Route path='chapter-7' element={<EN.ComplexSentences />} />
                        <Route path='chapter-8' element={<EN.Storage />} />
                        <Route path='chapter-9' element={<EN.API />} />
                        <Route path='chapter-10' element={<EN.Backend />} />
                        <Route path='chapter-11' element={<EN.Server />} />
                        <Route path='chapter-12' element={<EN.Launch />} />
                        <Route path='handbook' element={<EN.Handbook />} />
                        <Route path='glossary' element={<EN.Glossary />} />
                        <Route index element={<Home />} />
                    </Route>

                    <Route path='/ru'>
                        <Route path='chapter-1' element={<RU.Intro />} />
                        <Route path='chapter-2' element={<RU.Functions />} />
                        <Route path='chapter-3' element={<RU.Objects />} />
                        <Route path='chapter-4' element={<RU.Interface />} />
                        <Route path='chapter-5' element={<RU.Repositories />} />
                        <Route path='chapter-6' element={<RU.OnlineSearch />} />
                        <Route path='chapter-7' element={<RU.ComplexSentences />} />
                        <Route path='chapter-8' element={<RU.Storage />} />
                        <Route path='chapter-9' element={<RU.API />} />
                        <Route path='chapter-10' element={<RU.Backend />} />
                        <Route path='chapter-11' element={<RU.Server />} />
                        <Route path='chapter-12' element={<RU.Launch />} />
                        <Route path='handbook' element={<RU.Handbook />} />
                        <Route path='glossary' element={<RU.Glossary />} />
                        <Route index element={<Home />} />
                    </Route>

                    <Route path='*' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </app.Provider>
    );
};

export default App;
