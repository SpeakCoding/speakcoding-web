import React from 'react';
import Logo from '../../components/logo';
import s from './home.css';

const Home = () => (
    <div className={s.box}>
        <div className={s.logo}>
            <Logo />
        </div>
    </div>
);

export default Home;
