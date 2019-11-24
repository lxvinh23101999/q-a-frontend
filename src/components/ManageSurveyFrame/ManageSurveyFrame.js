import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
import ManageSurveyList from '../ManageSurveyList/ManageSurveyList';
class ManageSurveyFrame extends Component {
    componentDidMount() {
        callApi('surveys/listbyadmin', 'GET', null).then(res => {     
            this.props.onFetchManageSurveys(res.data.surveys);    
        }).catch(err => {
            console.log(err.response.data);
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="text-center">
                    <h1>Quản lý phiên khảo sát</h1><hr />
                </div>
                <ManageSurveyList></ManageSurveyList>
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
        onFetchManageSurveys: (surveys) => {
            dispatch(actions.actFetchManageSurveys(surveys));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageSurveyFrame);
