const initialState = {
    // danhSachGhe : [],
    // thongtinPhim : null,
    chiTietPhim : {}
};

function bookingReducer(state = initialState,actions){
    const {type , payload} = actions;
    switch (type) {
        case "GET_BOOKING_SUCESS":
            return {...state, chiTietPhim : payload};
        default:
            return state;
    }
}

export default bookingReducer;