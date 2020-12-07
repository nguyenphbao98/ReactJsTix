import Axios from 'axios';

// * function to get list of seats by MaLichChieu
export function getBookingRequest(){
    return async (dispatch) =>  {
        // call Api
        try {
            const res = await Axios.get(
                `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16099`
            );
            console.log(res.data);
            if(res.status === 200 || res.status === 201){
                //dispatch lên reducer
                dispatch(getBookingSuccess(res.data));
            }
        }
        catch (err){
            
        }
    }
}

export function getBookingSuccess(booking){
    return {
        type : "GET_BOOKING_SUCESS",
        payload : booking,
    }
}