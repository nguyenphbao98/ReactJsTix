import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getBookingRequest} from '../../redux/actions/booking.action';
import {useSelector} from 'react-redux';
import './style.scss';
import BlurImage from '../../components/blurImage';
import { Button } from '@material-ui/core';
import screen from '../../assets/img/screen.png';

function Booking() {
    const thongTinPhim = useSelector((state) => state.booking.chiTietPhim.thongTinPhim);
    const danhSachGhe = useSelector((state) => state.booking.chiTietPhim.danhSachGhe);
    const dispatch = useDispatch();
    useEffect(function(){
        //dispatch action để tương tác với API
        dispatch(getBookingRequest());
    },[]);

    function renderGhe(){
        return danhSachGhe.map((ghe,index) => {
            return (<>
                <Button key={index} 
                    onClick={() => {
                        dispatch({
                            type : "CHON_GHE",
                            payload : ghe,
                        });
                    }}
                    >
                {ghe.stt}</Button>
            </>)
        })
    }

    return (
        <div className="movie">
            <div className="movie__left">
                <BlurImage />
            </div>

            <div className="movie__right">
                <div className="movie__right__header">

                </div>

                <div className="movie__right__content">
                    
                    <div className="content__screen">
                        <div className="screen">
                            <img src={screen} alt="screen"/>
                        </div>
                    </div>

                    <div className="content__listSeat">

                    </div>
                </div>
                
            </div>

            
        </div>
    )
}

export default Booking;
