import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalAddSurvey from '../../components/ModalAddSurvey/ModalAddSurvey';
import SurveyFrame from '../../components/SurveyFrame/SurveyFrame';
import * as actions from './../../actions/index';
import { Link } from 'react-router-dom';
import callApi from '../../helpers/apiCaller';
class SurveyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "student"
        }
    }
    componentDidMount() {
        callApi('surveys/list', 'GET', null).then(res => {
            setTimeout(() => {
                this.props.onChangeIsLoading();
            }, 500);
            this.setState({
                role: res.data.userInfo.role
            })
            this.props.onFetchSurveys(res.data.surveys);
        }).catch(err => {
            if (err.response.status === 401 || err.response.status === 403) {
                window.localStorage.removeItem('isLogged');
            }
            else {
                console.log(err.response.data);
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    {this.state.role === "student" ? "" :
                        <div className="row">
                            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                                {this.state.role === "student" ? "" : <ModalAddSurvey></ModalAddSurvey>}
                            </div>
                            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            </div>
                        </div>}
                    <div className="row">
                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <div className="panel panel-default">
                                <div className="panel-heading"><i className="fa fa-bars" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i> Menu</div>
                                <div className="panel-body">
                                    <ul className="nav nav-pills nav-stacked">
                                        <li role="presentation"><Link to={'/sessions'}>Phiên hỏi đáp</Link></li>
                                        <li role="presentation" className="active"><Link to={'/surveys'}>Phiên khảo sát</Link></li>
                                        {this.state.role === "admin" ? <li role="presentation"><Link to={'/admin'}>Trang quản trị admin</Link></li> : ""}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                            <SurveyFrame></SurveyFrame>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // surveys: state.surveys,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchSurveys: (surveys) => {
            dispatch(actions.actFetchSurveys(surveys));
        },
        onChangeIsLoading: () => {
            dispatch(actions.changeIsLoading());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage);
