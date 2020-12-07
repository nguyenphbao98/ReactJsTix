import Axios from 'axios';
import {startLoading,stopLoading} from './common.action';

export function getMovieListRequest(){
    return(dispatch)=> {
        dispatch(startLoading());
        Axios.get("https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
        // Axios({
        //     method: "GET",
        //     url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        // })
        .then((res)=>{
            dispatch(getMovieListSuccess(res.data))
            dispatch(stopLoading());
        })
        .catch((err)=>{
            dispatch(getMovieListFailed(err));
            //stop loading
            dispatch(stopLoading());
        })
    }
}

function getMovieListSuccess(movieList){
    return {
        type : "GET_MOVIE_LIST_SUCCESS",
        payload : movieList,
    }
}

function getMovieListFailed(err){
    return {
        type : "GET_MOVIE_LIST_FAILED",
        payload : err,
    }
}