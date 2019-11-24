import React, { Component } from 'react';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyInfo from '../../components/SurveyInfo/SurveyInfo';
import AddSurveyQuestionsCollapse from '../../components/AddSurveyQuestionsCollapse/AddSurveyQuestionsCollapse';
import SurveyQuestionFrame from '../../components/SurveyQuestionFrame/SurveyQuestionFrame';
import callApi from '../../helpers/apiCaller';
import QuestionResultFrame from '../../components/QuestionResultFrame/QuestionResultFrame';
import OwnerSurveyQuestionFrame from '../../components/OwnerSurveyQuestionFrame/OwnerSurveyQuestionFrame';
import EnterSurveyPasswordForm from '../../components/EnterSurveyPasswordForm/EnterSurveyPasswordForm';
class SurveyQuestionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "questions",
            isOwner: "false",
            survey: {},
            isJoined: false,
        }
    }
    componentDidMount() {
        const { match } = this.props;
        let id = match.params.id;
        callApi(`surveyQuestions/getbysurveyid/${id}`, 'GET', null).then(res => {
            if (res.data && res.data.isJoined) {
                this.setState({
                    isJoined: true
                });
                this.setState({
                    isOwner: res.data.isOwner,
                    survey: res.data.survey,
                });
                this.props.onFetchQuestionBySurveyId(res.data.surveyQuestions);
            }
        }).catch(err => {
            console.log(err.response.data);
        });
    }
    render() {
        if (!this.state.isJoined) return (
            <React.Fragment>
                <EnterSurveyPasswordForm location={this.props.location}></EnterSurveyPasswordForm>
            </React.Fragment>
        )
        let { name, isOwner, survey } = this.state;
        let isLocked = (new Date(survey.closedAt).getTime() - Date.now() > 0 || !survey.closedAt) ? false : true;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <SurveyInfo survey={survey}></SurveyInfo>
                    {isOwner && !isLocked ? <AddSurveyQuestionsCollapse surveyId={this.props.match.params.id}></AddSurveyQuestionsCollapse> : ""}
                    <Link to={'/surveys'} className="btn btn-info mb-10">
                        <i className="fa fa-arrow-left" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>
                        Trở về bảng phiên khảo sát
                    </Link>
                    <ul className="nav nav-tabs" style={{ marginBottom: '20px', marginTop: '20px' }}>
                        <li role="presentation" className={name === "questions" ? "active" : ""}><a href="/" onClick={(e) => { e.preventDefault(); this.setState({ name: "questions" }) }}>Câu hỏi</a></li>
                        <li role="presentation" className={name === "results" ? "active" : ""}><a href="/" onClick={(e) => { e.preventDefault(); this.setState({ name: "results" }) }}>Kết quả</a></li>
                    </ul>
                    {name === "questions" ? isOwner ? <OwnerSurveyQuestionFrame></OwnerSurveyQuestionFrame> : <SurveyQuestionFrame surveyId={this.props.match.params.id} isLocked={isLocked}></SurveyQuestionFrame> : <QuestionResultFrame isOwner={isOwner} isLocked={isLocked}></QuestionResultFrame>}
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
        onFetchQuestionBySurveyId: (surveyQuestions) => {
            dispatch(actions.actFetchSurveyQuestionsBySurveyId(surveyQuestions));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SurveyQuestionPage);
