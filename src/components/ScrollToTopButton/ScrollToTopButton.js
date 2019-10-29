import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
// import * as actions from '../../actions/index';
class ScrollToTopButton extends Component {
    goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() { 
        return (
            <React.Fragment>
                <button id="myBtn" title="Go to top"  onClick={this.goToTop}>Top</button>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScrollToTopButton);
