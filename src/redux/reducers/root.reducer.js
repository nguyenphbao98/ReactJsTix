import {combineReducers} from 'redux';
import CommonReducer from './common.reducer';
import BookingReducer from './booking.reducer';
import HomeReducer from './home.reducer';
import UserReducer from './user.reducer';

const rootReducer = combineReducers({
    //child reducer
    common : CommonReducer,
    booking : BookingReducer,
    home : HomeReducer,
    user : UserReducer,
});

export default rootReducer;