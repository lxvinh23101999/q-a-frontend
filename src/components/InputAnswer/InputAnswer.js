import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../actions/index';
class InputAnswer extends Component {
    // componentDidMount(){
    //     this.nameInput.focus(); 
    // }
    render() {
        return (
            <React.Fragment>
                <div className="input-group">
                    <span className="input-group-addon"><i className="glyphicon glyphicon-send"></i></span>
                    {/* ref={(inputAnswer) => { this.nameInput = inputAnswer; }} */}
                    <input className="form-control" type="text" placeholder="Viết trả lời..." />
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(InputAnswer);