const initialState = {
    movieList : [],
    movieInfo : null,
};

const homeReducer = (state = initialState,action) =>{
    let {type,payload} = action
    switch (type){
        case "GET_MOVIE_LIST_SUCCESS"  : {
                // state.movieList = payload;
            return {...state,movieList:payload};
        }
        case "GET_MOVIE_DETAIL_SUCCESS" :{
            return {...state,movieInfo:payload};
        }
        default :
            return state;
    }
}

export default homeReducer;