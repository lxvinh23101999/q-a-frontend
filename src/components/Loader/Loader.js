import React, { Component } from 'react';
import LoadingGif from './../../assets/images/loading.gif';
import './style.css';
class Loader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="globalLoading">
                    <img src={LoadingGif} alt="loading" className="icon"/>
                </div>
            </React.Fragment>
        );
    }
}
export default Loader;
