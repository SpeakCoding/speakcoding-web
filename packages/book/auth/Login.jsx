import React, { useEffect } from 'react';
import pt from 'prop-types';
import { init, signIn } from '../tools/auth';
import s from './login.css';

let ready = false;

const Login = ({ onSuccess }) => {
    useEffect(() => {
        if (!ready) {
            init();
            ready = true;
        }
    }, []);

    return (
        <div className={s.box}>
            <button>login with google</button>
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
