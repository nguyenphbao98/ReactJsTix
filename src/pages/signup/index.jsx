import React, { Component } from 'react';
import './style.scss';
import logo from '../../assets/img/logo-login.png';
import { Formik, Form , Field } from 'formik';
import { TextField , Button } from '@material-ui/core';


class SignUp extends Component{
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
                            Đăng ký để được nhiều ưu đãi, mua vé <br/> và bảo mật thông tin!
                        </div>
                        <div className="wrapper__content__action">
                            <Formik
                            initialValues={{
                                taiKhoan : "",
                                matKhau : "",
                                email : "",
                                soDt : "",
                                hoTen : "",
                                maNhom : "gp01",
                                maLoaiNguoiDung : "KhachHang"
                            }}
                            onSubmit={this._handleSubmit}
                            render={formikProps => (
                                <Form>
                                    <Field id="taiKhoan" type="text" label="Tài khoản" name="taiKhoan" onChange={formikProps.handleChange} component={TextField}/>
                                    <Field id="matKhau" type="password" label="Mật Khẩu" name="matKhau" onChange={formikProps.handleChange} component={TextField}/>
                                    <Field id="email" type="text"  label="Email" name="email" onChange={formikProps.handleChange} component={TextField}/>
                                    <Field id="soDt" type="text"  label="Số Điện Thoại" name="soDt" onChange={formikProps.handleChange} component={TextField}/>
                                    <Field id="hoTen" type="text"  label="Họ Tên" name="hoTen" onChange={formikProps.handleChange} component={TextField}/> 
                                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: 18 }} >Đăng nhập</Button>
                                </Form>
                            )}/>
                                
                            
                        </div>
                    </div>
                </div>
            </>
        )}
}

export default SignUp;
