import React from 'react';
import { Route } from 'react-router-dom';
import Intro from './1-intro';
import Glossary from './glossary';

const EN = () => (
    <>
        <Route path='/en/chapter-1' component={Intro} />
        <Route path='/en/glossary' component={Glossary} />
    </>
);

export default EN;
