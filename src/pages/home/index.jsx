import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getMovieListRequest } from '../../redux/actions/home.action';
import { CircularProgress, Grid } from '@material-ui/core';
import HeaderHome from '../../components/headerHome';


class Home extends Component {

    renderMovieList = () =>{
        const {movieList} = this.props;
        return movieList?.map((item, index) => {
            return(
                <div key={index} >
                    {item}
                </div>
            )
        })
    }
    
    render() {

        const {isLoading} = this.props;
        if(isLoading){
            return <CircularProgress />
        }

        return (
            
            <div>
                <HeaderHome/>
            </div>
        );
    }

    componentDidMount(){
        this.props.dispatch(getMovieListRequest());
        console.log('componentDidMount');
    }
}

const mapStateToProps = (state) =>{
    return{
        isLoading : state.common.isLoading,
        movieList : state.home.movieList,
    }
}

export default connect(mapStateToProps)(Home);