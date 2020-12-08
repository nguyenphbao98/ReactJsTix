import React from 'react';
import './style.scss'
import logo from '../../assets/img/logo-login.png'
import { TextField , Button } from '@material-ui/core';
import { Formik, Form , Field } from 'formik';


function Login() {
    return (
        <>
            <div className="wrapper">
                <div className="wrapper__content">
                    <img src={logo} alt="login"/>
                    <div className="wrapper__content__message">
                    Đăng nhập để được nhiều ưu đãi, mua vé <br/> và bảo mật thông tin! 
                    </div>
                    <div className="wrapper__content__action">
                        
                    </div>
                </div>
            </div>
        </>
        

        
    )
}

export default Login;
