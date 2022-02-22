import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';

const App = () => {
    return (
        <div>
            <h2>Signup Form</h2>
            <Signup />
            <h2>Login Form</h2>
            <Login />
            <h2>Forget Password form</h2>
            <ForgetPassword />
        </div>
    );
};

export default App;
