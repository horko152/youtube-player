import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './index.css';

const clientId = ''; 

const Login = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [accessToken, setAccessToken] = useState();
    const [user, setUser] = useState();

    const logIn = async (response) => {
       const profile = await response.getBasicProfile(); 
       if(response.accessToken){
            setIsLogged(true);
            setAccessToken(response.accessToken);
            
        }
        setUser(profile.getName());
        console.log(profile.getName());
        console.log(user);
    }
    
    const logOut = (response) => {
        setIsLogged(false);
        setAccessToken('');
    }
    
    const loginFailure = (response) => {
        alert('Failed to log in');
    }
    
    const logoutFailure = (response) => {
        alert('Failed to log out');
    }
    

    return(
        <div className="login">
            { isLogged ?
            <GoogleLogout
                clientId={ clientId }
                buttonText={ `Logout` }
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