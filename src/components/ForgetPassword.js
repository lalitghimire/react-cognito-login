import React, { useState } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import Pool from '../Userpool';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const getUser = () => {
        return new CognitoUser({
            Username: email,
            Pool,
        });
    };

    const sendVerificationCode = (e) => {
        e.preventDefault();
        getUser().forgotPassword({
            onSuccess: (data) => {
                console.log('onSucess: ', data);
                setMsg('Verification code sent to your email');
            },
            onFailure: (err) => {
                console.error('onFailure: ', err);
                setMsg(`${err}`);
            },
            inputVerificationCode: (data) => {
                console.log('verification code: ', data);
            },
        });
    };

    return (
        <div>
            {msg && <p>{msg}</p>}
            <form onSubmit={sendVerificationCode}>
                <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />

                <button type='submit'>Send Verification code</button>
            </form>
        </div>
    );
};

export default ForgetPassword;
