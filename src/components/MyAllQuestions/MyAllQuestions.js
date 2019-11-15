import React, { Component } from 'react';
class MyAllQuestions extends Component {
    render() {
        let { questions } = this.props;
        // let elmQuestions = questions.map((question, index) => {
        //     return <QuestionItem key={question.id} index={index + 1} question={question} closedAtSession={session.closedAt}/>
        // });
        // if (Object.keys(elmQuestions).length === 0) {
        //     elmQuestions = <div style={{ textAlign: "center" }}><i>Không tìm thấy kết quả phù hợp</i></div>
        // }
        return (
            
            <React.Fragment>
                <div className="panel panel-default" style={{ marginTop: '40px' }}>
                    <div className="panel-heading">Câu hỏi của tôi</div>
                    <div className="panel-body">
                        
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default MyAllQuestions;
