import React, { Component } from 'react';
import MyInfoHeader from '../../components/MyInfoHeader/MyInfoHeader';
import MyInfoBody from '../../components/MyInfoBody/MyInfoBody';
import callApi from '../../helpers/apiCaller';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class MyInfoPage extends Component {
    componentDidMount() {
        callApi(`users/getUserById`, 'GET', null).then(res => {
            this.props.onFetchMyAllQuestions(res.data.questions);
            this.props.onFetchMyAllAnswers(res.data.answers);
            this.props.onFetchUserInfo(res.data);
        }).catch(err => {
            console.log(err.response.data);
        })
    }
    render() {
        return (
            <React.Fragment>
                <MyInfoHeader></MyInfoHeader>
                <MyInfoBody></MyInfoBody>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchMyAllQuestions : (questions) => {
            dispatch(actions.actFetchMyAllQuestions(questions));
        },
        onFetchMyAllAnswers : (answers) => {
            dispatch(actions.actFetchMyAllAnswers(answers));
        },
        onFetchUserInfo : (user) => {
            dispatch(actions.actFetchUserInfo(user));
        }
    }
}
export default connect(null, mapDispatchToProps)(MyInfoPage);
