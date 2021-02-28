import React, { useEffect } from 'react';
import { useRouter } from '../../router';
import Logo from '../../components/logo';
import s from './home.css';

const Home = () => {
    const { navigate } = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (localStorage.getItem('auth_token')) 1;
            else navigate('login');
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={s.box}>
            <div className={s.logo}>
                <Logo />
            </div>
        </div>
    );
};

export default Home;
