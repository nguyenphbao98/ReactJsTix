import {combineReducers} from 'redux';
import CommonReducer from './common.reducer';
import BookingReducer from './booking.reducer';
import HomeReducer from './home.reducer';

const rootReducer = combineReducers({
    //child reducer
    common : CommonReducer,
    booking : BookingReducer,
    home : HomeReducer,
});

export default rootReducer;