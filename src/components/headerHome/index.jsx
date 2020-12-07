import React from 'react';
import './style.scss'
import logo from '../../assets/img/web-logo.png';
import userImg from '../../assets/img/avatar.png';

function HeaderHome(props) {
    //const {hoTen} = this.props;
    return (
        // header
    <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <a className="navbar-brand" href="/">
            <img src={logo} className="img-fluid" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse navbar-light px-2 py-2" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item active ml-md-5">
                <a className="nav-link" href="#">Lịch Chiếu <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Cụm rạp</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Tin tức</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Ứng dụng</a>
                </li>
            </ul>
            <a className="navbar-brand d-flex user" href="#">
                <div className="user__logo text-center">B</div>
                <span>Bảo Nguyễn</span>
            </a>

            <a className="navbar-brand d-flex user" href="#">
                <div className="user__img">
                    <img src={userImg} alt="signin"/>
                </div>
                <span>Đăng nhập</span>
            </a>
            <div className="d-flex align-items-center">
                <a className="nav__logo" href="#">
                    <i className="fa fa-map-marker-alt location" />
                </a>
            </div>
            </div>
        </nav>
    </header>
    )
}

export default HeaderHome;
