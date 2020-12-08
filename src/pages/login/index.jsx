import React , { Component } from 'react';
import './style.scss'
import logo from '../../assets/img/logo-login.png'
import { TextField , Button } from '@material-ui/core';
import { Formik, Form , Field } from 'formik';
import * as Yub from 'yup';

const signInUserSchema = Yub.object().shape({
    taiKhoan : Yub.string().required("Tài khoản không được để trống"),
    matKhau: Yub.string().required("Mật khẩu không được để trống"),
})
class Login extends Component{

    _handleSubmit = (value) => {
        console.log(value);
    }

    render() {
        return(
            <>
                <div className="wrapper">
                    <div className="wrapper__content">
                        <img src={logo} alt="login"/>
                        <div className="wrapper__content__message">
                        Đăng nhập để được nhiều ưu đãi, mua vé <br/> và bảo mật thông tin! 
                        </div>
                        <div className="wrapper__content__action">
                            <Formik
                                initialValues={{
                                    taiKhoan : "",
                                    matKhau : "",}}
                                validationSchema={signInUserSchema}
                                onSubmit={this._handleSubmit}
                                render={formikProps => (
                                    <Form>
                                        <Field id="taiKhoan" type="text" label="Tài khoản" name="taiKhoan" onChange={formikProps.handleChange} component={TextField}/>
                                        <Field id="matKhau" type="password" label="Mật Khẩu" name="matKhau" onChange={formikProps.handleChange} component={TextField}/>
                                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 18 }} >Đăng nhập</Button>
                                    </Form>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;
