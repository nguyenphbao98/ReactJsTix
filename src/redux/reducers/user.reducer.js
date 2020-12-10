
let initialState = {}
if (typeof localStorage != "undefined") {
    initialState = {
        credentials: JSON.parse(localStorage.getItem("user")),
    };
} 
else {
    initialState = {
        credentials: null
    };
}

const UserReducer = (state = initialState, action) => {
    let {type,payload} = action
    switch (type) {
        case "GET_USER_SUCCESS" : 
            return {...state,credentials:payload};
        default:
            return state;
    }
}

export default UserReducer;