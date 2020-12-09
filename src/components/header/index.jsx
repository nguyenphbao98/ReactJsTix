import './style.scss';
import React from 'react'



function Header() {
    return (
        <div className="p-2 header">
            <div className="header__left">
                <ul>
                    <li className="active"><span className="header__left__span">01 </span>
                        CHỌN GHẾ & THANH TOÁN
                    </li>
                    <li><span className="header__left__span">02 </span>
                        KẾT QUẢ ĐẶT VÉ
                    </li>
                </ul>
            </div>
            <div className="header__right">
                <div className="header__right__info">
                    <p><img src="https://lh6.googleusercontent.com/-DobMZPsqizc/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm5gvBtYpDskbQQRstpuvWhk-0scA/s96-c/photo.jpg" alt="image"/> 
                        Bảo Nguyễn
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Header;