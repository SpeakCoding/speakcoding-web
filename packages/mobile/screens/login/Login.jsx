import React from 'react';
import { useRouter } from '../../router';
import Logo from '../../components/logo';
import s from './login.css';

const Login = () => {
    const { navigate } = useRouter();

    return (
        <div className={s.box}>
            <Logo />
            <div className={s.title}>Log in</div>
        </div>
    );
};

export default Login;
