import React, { Component } from 'react';
import MyBasicInfo from '../MyBasicInfo/MyBasicInfo';
import MyAllQuestions from '../MyAllQuestions/MyAllQuestions';
import MyAllAnswers from '../MyAllAnswers/MyAllAnswers';
import { connect } from 'react-redux';
class MyInfoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "basicInfo"
        }
    }
    onClick = (e) => {
        e.preventDefault();
        let target = e.target;
        let name = target.name;
        this.setState({
            name: name
        })
    }
    render() {
        let { name } = this.state;
        return (
            <React.Fragment>
                <div className="container">
                    <ul className="nav nav-tabs">
                        <li role="presentation" className={name === "basicInfo" ? "active" : ""}><a href="/"   name="basicInfo" onClick={this.onClick}>Thông tin cơ bản</a></li>
                        <li role="presentation" className={name === "allQuestions" ? "active" : ""}><a href="/"  name="allQuestions" onClick={this.onClick}>Quản lý câu hỏi <span className="badge">{this.props.questions.length}</span></a></li>
                        <li role="presentation" className={name === "allAnswers" ? "active" : ""}><a href="/"  name="allAnswers" onClick={this.onClick}>Quản lý câu trả lời <span className="badge">{this.props.answers.length}</span></a></li>
                    </ul>
                    {name === "basicInfo" ? <MyBasicInfo user={this.props.user}></MyBasicInfo> : name === "allQuestions" ? <MyAllQuestions questions={this.props.questions}></MyAllQuestions> : <MyAllAnswers></MyAllAnswers>}
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.myBasicInfo,
        questions: state.myAllQuestions,
        answers: state.myAllAnswers
    }
};
export default connect(mapStateToProps, null)(MyInfoBody);
