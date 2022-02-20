import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
    ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

const Userpool = new CognitoUserPool(poolData);

export default Userpool;
