import React, { useState } from 'react';
import Userpool from './Userpool';

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
