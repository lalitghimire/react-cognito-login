import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
    return (
        <div>
            <h2>Signup Form</h2>
            <Signup />
            <h2>Login Form</h2>
            <Login />
        </div>
    );
};

export default App;
