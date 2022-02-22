import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Userpool from '../Userpool';

const Login = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    //test@test.com, example1
    //test2@test.com, example2

    const onSubmit = (e) => {
        e.preventDefault();

        //create new user object
        const user = new CognitoUser({
            Username: loginEmail,
            Pool: Userpool,
        });

        // provide Authentication crdentials
        const authDetails = new AuthenticationDetails({
            Username: loginEmail,
            Password: loginPassword,
        });

        // authenticate the user
        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log('onSuccess: ', data);
            },
            onFailure: (err) => {
                console.error('OnFailure: ', err);
            },
        });
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
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;
