import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerSurveyQuestionItem from '../OwnerSurveyQuestionItem/OwnerSurveyQuestionItem';
class OwnerSurveyQuestionFrame extends Component {
    render() {
        let { surveyQuestions } = this.props;
        let elmQuestions = surveyQuestions.map((surveyQuestion, index) => {
            return <OwnerSurveyQuestionItem key={surveyQuestion.id} index={index + 1} surveyQuestion={surveyQuestion}></OwnerSurveyQuestionItem>
        });
        return (
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-body bg-color">
                        {elmQuestions}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        surveyQuestions: state.surveyQuestions
    }
};
export default connect(mapStateToProps, null)(OwnerSurveyQuestionFrame);
