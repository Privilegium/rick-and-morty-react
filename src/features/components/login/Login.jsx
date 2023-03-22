import { GoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import './login.scss'

const Login = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const savedUserData = JSON.parse(localStorage.getItem('user'))
        if (savedUserData) {
            setIsLogged(true)
        }
    }, [])

    const onLogOut = () => {
        localStorage.removeItem('user')
        setIsLogged(false)
    }

    return (
        <div className="login-btn">
            {!isLogged && <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    setIsLogged(true)
                    localStorage.setItem('user', JSON.stringify(credentialResponse))
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />}
            {isLogged && <div className='success'>
                            <div className='success__text'>You are logged</div>
                            <button className='success__btn' onClick={onLogOut}>Log out</button>
                        </div>}
        </div>
    )
}

export default Login

