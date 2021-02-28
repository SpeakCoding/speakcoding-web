import React from 'react';
import { useRouter } from '../../router';

const Login = () => {
    const { goBack } = useRouter();

    return (
        <div>
            Login
            <div>
                <button onClick={() => goBack()}>go back</button>
            </div>
        </div>
    );
};

export default Login;
