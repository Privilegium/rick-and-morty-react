import { GoogleLogin } from '@react-oauth/google';

import './login.scss'

const Login = () => {

    return (
        <div className="login-btn">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
        </div>
    )
}

export default Login

