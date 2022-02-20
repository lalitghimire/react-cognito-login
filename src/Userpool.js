import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'eu-west-1_fA7b07S2K',
    ClientId: '786a9bcgn83hvrh9n1o9lv1ruk',
};

const Userpool = new CognitoUserPool(poolData);

export default Userpool;
