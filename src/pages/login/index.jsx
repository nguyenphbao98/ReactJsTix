import React from 'react';
import './style.scss'
import logo from '../../assets/img/logo-login.png'

function Login() {
    return (
        <>
            <div className="container-fluid content"></div>
            <div className="wrapper">
                <img src={logo} alt="login"/>
                <div className="wrapper__message">

                </div>
                <div className="wrapper__action">
                    
                </div>
            </div>
        </>
        

        
    )
}

export default Login;
