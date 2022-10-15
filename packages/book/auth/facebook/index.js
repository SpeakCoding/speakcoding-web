import React, { useCallback, useEffect } from 'react';
import pt from 'prop-types';
import { useLocationState } from '@sc/ui/hooks';
import { useAPI } from '../../tools';
import { init, signIn } from './tools';
import { L } from '../../components';
import LoginButton from '../Button';
import logo from './logo.svg';

let ready = false;

const Facebook = ({ onSubmit }) => {
    const fetch = useAPI(),
        [{ query }] = useLocationState();

    const handleSignIn = useCallback(async () => {
        try {
            const token = await signIn();

            const res = await fetch('/sign_in/facebook.json', {
                method: 'POST',
                body: { access_token: token, promo_code: query.promo_code }
            });

            onSubmit(res);
        } catch {
            /**/
        }
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
            <L lang='en'>Sign in with Facebook</L>
            <L lang='ru'>Войти через Facebook</L>
        </LoginButton>
    );
};

Facebook.propTypes = {
    onSubmit: pt.func
};

Facebook.defaultProps = {
    onSubmit: () => {}
};

export default Facebook;
