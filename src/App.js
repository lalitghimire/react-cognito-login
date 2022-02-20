import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const poolData = {
        UserPoolId: 'eu-west-1_fA7b07S2K',
        ClientId: '786a9bcgn83hvrh9n1o9lv1ruk',
    };

    const Userpool = new CognitoUserPool(poolData);

    const onSubmit = (e) => {
        e.preventDefault();
        Userpool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(data);
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button type='submit'>Signup</button>
            </form>
        </div>
    );
};

export default App;
