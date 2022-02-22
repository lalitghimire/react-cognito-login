import React, { useState } from 'react';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    //test@test.com, example1
    //test2@test.com, example2

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={loginEmail}
                    onChange={(e) => {
                        setLoginEmail(e.target.value);
                    }}
                />
                <input
                    value={loginPassword}
                    onChange={(e) => {
                        setLoginPassword(e.target.value);
                    }}
                />
                <button type='submit'>Signup</button>
            </form>
        </div>
    );
};

export default Login;
