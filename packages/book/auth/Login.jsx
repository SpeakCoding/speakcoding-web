import React, { useCallback } from 'react';
import pt from 'prop-types';
import { useLocationState } from '@sc/ui/hooks';
import { L, Logo } from '../components';
import Apple from './apple';
import Facebook from './facebook';
import Google from './google';
import s from './login.css';

const Login = ({ onSuccess }) => {
    const [, navigate] = useLocationState();

    const handleSubmit = useCallback(
        res => {
            if (res.meta?.authentication_token)
                localStorage.setItem('book_auth_token', res.meta.authentication_token);

            if (res.data) {
                onSuccess();
                navigate('/');
            }
        },
        [onSuccess]
    );

    return (
        <div className={s.box}>
            <div className={s.logo}>
                Speak <Logo size={80} /> Coding
            </div>
            <div className={s.content}>
                <h1 className={s.title}>
                    <L lang='en'>Sign in</L>
                    <L lang='ru'>Войти</L>
                </h1>
                <div className={s.message}>
                    <L lang='en'>
                        Learn how to read and understand code by exploring how the real apps are
                        built
                    </L>
                    <L lang='ru'>Научитесь читать и понимать код, исследуя настоящие приложения</L>
                </div>
                <Google onSubmit={handleSubmit} />
                <Facebook onSubmit={handleSubmit} />
                <Apple onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

Login.propTypes = {
    onSuccess: pt.func
};

Login.defaultProps = {
    onSuccess: () => {}
};

export default Login;
