import Axios from 'axios';
import {startLoading,stopLoading} from '../actions/common.action';


export function loginRequest(user,history) {
    return (dispatch) => {
        dispatch(startLoading());

        Axios.post(
            "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            user
        ).then((res) => {
             //lưu xuống local Strorage
            localStorage.setItem("user",JSON.stringify(res.data));

            //chuyển về home
            history.push("/");
            
            dispatch(stopLoading());
        }).catch((err) => {
            alert(err);
            dispatch(stopLoading());
        })
    }
}
