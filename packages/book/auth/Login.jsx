import React, { useCallback } from 'react';
import pt from 'prop-types';
import { L, Logo } from '../components';
import Apple from './apple';
import Google from './google';
import s from './login.css';

const Login = ({ onSuccess }) => {
    const handleSubmit = useCallback(
        res => {
            if (res.meta?.authentication_token)
                localStorage.setItem('book_auth_token', res.meta.authentication_token);

            if (res.data) onSuccess();
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
                {/*<button type='button' className={s.login} onClick={handleSignInFacebook}>*/}
                {/*    <div className={classNames(s.icon, s.facebook)} />*/}
                {/*    <L lang='en'>Sign in with Facebook</L>*/}
                {/*    <L lang='ru'>Войти через Facebook</L>*/}
                {/*</button>*/}
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
