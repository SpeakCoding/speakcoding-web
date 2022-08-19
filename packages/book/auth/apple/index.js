import React, { useCallback, useEffect } from 'react';
import pt from 'prop-types';
import { useAPI } from '../../tools';
import { init, signIn } from './tools';
import { L } from '../../components';
import LoginButton from '../Button';
import logo from './logo.svg';

let ready = false;

const Apple = ({ onSubmit }) => {
    const fetch = useAPI();

    const handleSignIn = useCallback(async () => {
        const data = await signIn();

        if (!data) return;

        const res = await fetch('/sign_in/apple.json', {
            method: 'POST',
            body: {
                code: data.authorization.code,
                first_name: data.user?.name?.firstName || '',
                last_name: data.user?.name?.lastName || ''
            }
        });

        onSubmit(res);
    }, [onSubmit]);

    useEffect(() => {
        if (!ready) {
            init();
            ready = true;
        }
    }, []);

    return (
        <LoginButton onClick={handleSignIn}>
            <LoginButton.Logo pic={logo} />
            <L lang='en'>Sign in with Apple</L>
            <L lang='ru'>Войти через Apple</L>
        </LoginButton>
    );
};

Apple.propTypes = {
    onSubmit: pt.func.isRequired
};

export default Apple;
