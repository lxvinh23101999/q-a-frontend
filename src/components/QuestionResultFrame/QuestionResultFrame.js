import React, { Component } from 'react';
import { connect } from 'react-redux';
import PieChart from '../PieChart/PieChart';
import ColumnChart from '../ColumnChart/ColumnChart';
// import callApi from '../../helpers/apiCaller';
class QuestionResultFrame extends Component {
    render() {
        let { surveyQuestions } = this.props;
        let elmCharts = surveyQuestions.map((surveyQuestion, index) => {
            let data = [];
            let total = 0;
            let arr = [];
            if (surveyQuestion.isResponded || this.props.isOwner) {
                if (surveyQuestion.typeQuestion === 1) {
                    for (let i = 0; i < surveyQuestion.selections.length; i++) {
                        total = total + (surveyQuestion.selections[i].voteUsers ? surveyQuestion.selections[i].voteUsers.length : 0);
                    }
                    for (let i = 0; i < surveyQuestion.selections.length; i++) {
                        let y = surveyQuestion.selections[i].voteUsers ? surveyQuestion.selections[i].voteUsers.length / total * 100 : 0;
                        let n = parseFloat(y); y = Math.round(n * 100) / 100
                        data.push({
                            label: surveyQuestion.selections[i].contentSelection,
                            y: y
                        })
                    }
                    return <PieChart key={index} data={data} index={index + 1} total={total} contentQuestion={surveyQuestion.contentQuestion}></PieChart>;
                }
                else {
                    for (let i = 0; i < surveyQuestion.selections.length; i++) {
                        if (surveyQuestion.selections[i].voteUsers) {
                            for (let j =0; j< surveyQuestion.selections[i].voteUsers.length; j++) {
                                if (arr.indexOf(surveyQuestion.selections[i].voteUsers[j]) === -1) {
                                    arr.push(surveyQuestion.selections[i].voteUsers[j]);
                                }
                            }
                        }
                    }
                    total = arr.length;
                    for (let i = 0; i < surveyQuestion.selections.length; i++) {
                        let y = surveyQuestion.selections[i].voteUsers ? surveyQuestion.selections[i].voteUsers.length / total * 100 : 0;
                        let n = parseFloat(y); y = Math.round(n * 100) / 100
                        data.push({
                            label: surveyQuestion.selections[i].contentSelection,
                            y: y
                        })
                    }
                    return <ColumnChart key={index} data={data} index={index + 1} total={total} contentQuestion={surveyQuestion.contentQuestion}></ColumnChart>;
                }
            }
            return "";
        });
        return (
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-body bg-color">
                        {elmCharts}
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
export default connect(mapStateToProps, null)(QuestionResultFrame);
