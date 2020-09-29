import React, { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './index.css';

const clientId = process.env.REACT_APP_CLIENT_ID;

const Login = () => {
    const [user,setUser] = useState({});

    useEffect(()=>{
        const getAuthToken = localStorage.getItem('auth_token');
        if(getAuthToken) {
          const user = localStorage.getItem('google_user');
          setUser(JSON.parse(user));
        }
      },[]);

    const logIn = async (response) => {
       const profile = await response.profileObj;
       if(response?.accessToken){
            localStorage.setItem('auth_token', response.accessToken);
            localStorage.setItem('google_user', JSON.stringify(profile));
            setUser(profile);
       }
    }

    const logOut = () => {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('google_user');
      setUser({});
    }

    const loginFailure = () => {
        alert('Failed to log in');
    }

    const logoutFailure = () => {
        alert('Failed to log out');
    }

    console.log('user', user?.name);
    return(
        <div className="login">
            { user?.name ?
            <GoogleLogout
                clientId={ clientId }
                buttonText= 'Logout' 
                onLogoutSuccess={ logOut }
                onFailure={ logoutFailure }
            /> :
            <GoogleLogin
                clientId={ clientId }
                buttonText='Login'
                onSuccess={ logIn }
                onFailure={ loginFailure }
                cookiePolicy={ 'single_host_origin' }
                responseType='code,token'
            />
            }
        </div>
    );
}

export default Login;