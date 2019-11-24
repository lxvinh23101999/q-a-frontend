import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class InputAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionId: '',
            contentAnswer: '',
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            questionId: this.props.questionId,
            [name]: value
        });
    }
    onKeyPress = (e) => {
        let code = e.which;
        if (code === 13) {
            this.props.onAddAnswer(this.state);
            this.onClear();
        }
    }
    onClear = () => {
        this.setState({
            contentAnswer: ''
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="input-group" style={{marginBottom: '10px'}}>
                    <span className="input-group-addon"><i className="glyphicon glyphicon-send"></i></span>
                    {/* ref={(inputAnswer) => { this.nameInput = inputAnswer; }} */}
                    <input className="form-control" type="text" placeholder="Viết trả lời..."  value={this.state.contentAnswer} name="contentAnswer" onChange={this.onChange} onKeyPress={this.onKeyPress} />
                </div>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddAnswer: (answer) => {
            dispatch(actions.actAddAnswerRequest(answer));
        }
    }
}
export default connect(null, mapDispatchToProps)(InputAnswer);
