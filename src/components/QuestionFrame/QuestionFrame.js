import React, { Component } from 'react';
import QuestionItem from '../QuestionItem/QuestionItem';
import SearchQuestion from '../SearchQuestion/SearchQuestion';
import { connect } from 'react-redux';
class QuestionFrame extends Component {
    render() {
        let { questions, searchQuestion} = this.props;
        let keyWord = searchQuestion.keyWord.toLowerCase();
        let filterQuestions = [];
        questions.forEach((question) => {
            let str = question.content;
            if (str.toLowerCase().includes(keyWord)) {
                filterQuestions.push(question);
            }
        });
        let elmQuestions = filterQuestions.map((question, index) => {
            return <QuestionItem key={question.id} index={index + 1} question={question} />
        });
        if (Object.keys(elmQuestions).length === 0) {
            elmQuestions = <div style={{ textAlign: "center" }}><i>Không tìm thấy kết quả phù hợp</i></div>
        }
        return (
            <React.Fragment>
                <div className="panel panel-primary">
                    <div className="panel-heading"><h4><i className="fa fa-bars" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>Danh sách câu hỏi</h4></div>
                    <div className="panel-body bg-color">
                        <SearchQuestion></SearchQuestion>
                        {elmQuestions}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        searchQuestion: state.searchQuestion
    }
};
export default connect(mapStateToProps, null)(QuestionFrame);
