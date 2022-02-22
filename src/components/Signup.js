import React, { useState } from 'react';
import Userpool from '../Userpool';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    //test@test.com, example1
    //test2@test.com, example2

    const onSubmit = (e) => {
        e.preventDefault();
        // cognito Userpool signup
        Userpool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.log(err.message);
                setErrorMsg(err.message);
            }
            console.log(data);
        });
    };

    return (
        <div>
            {errorMsg && <p>{errorMsg}</p>}
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

export default Signup;
