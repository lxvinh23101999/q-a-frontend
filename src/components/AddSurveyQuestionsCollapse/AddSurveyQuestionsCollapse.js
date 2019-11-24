import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import AddSelectionInput from '../AddSelectionInput/AddSelectionInput';
import callApi from '../../helpers/apiCaller';
import * as actions from '../../actions/index';
class AddSurveyQuestionsCollapse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentQuestion: '',
            typeQuestion: 1,
            selections: [{index: 1, contentSelection: ''}],
        }
    }
    onAddSelection = () => {
        let length = this.state.selections.length;
        let index = length !== 0 ? this.state.selections[length-1].index + 1 : 1;
        let subSelections = [...this.state.selections, {index: index, contentSelection: ''}];
        this.setState({
            selections: [...subSelections]
        })
    }
    onDeleteSelection = (index) => {
        let subSelections = this.state.selections;
        _.remove(subSelections, selection => {
            return selection.index === index;
        });
        this.setState({
            selections: [...subSelections]
        })
    }
    onChange = (obj) => {
        let index = _.findIndex(this.state.selections, function (item) { return item.index === obj.index; });
        let subSelections = this.state.selections;
        subSelections[index].contentSelection = obj.contentSelection;
        this.setState({
            selections: [...subSelections]
        })
    }
    onChangeType = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: parseInt(value)
        });
    }
    onChangeContentQuestion = (e) => {
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }
    onAddQuestion = () => {
        let selections = this.state.selections.map((selection) => {
            return selection.contentSelection;
        });
        let data = {
            surveyId: this.props.surveyId,
            contentQuestion: this.state.contentQuestion,
            typeQuestion: this.state.typeQuestion,
            selections: selections
        }
        callApi('surveyQuestions/create', 'POST', data).then(res => {
            this.props.onAddSurveyQuestion(res.data.surveyQuestion);
            this.onClear();
        }).catch(err => {
            console.log(err.response.data);
        });
    }
    onClear = () => {
        this.setState({
            contentQuestion: '',
            typeQuestion: 1,
            selections: [{index: 1, contentSelection: ''}],
        });
    }
    render() {
        let { selections, typeQuestion } = this.state;
        let elmSelections = selections.map((selection) => {
            return <AddSelectionInput 
                        key={selection.index} 
                        index={selection.index} 
                        typeQuestion={typeQuestion} 
                        contentSelection= {selection.contentSelection}
                        onDeleteSelection={this.onDeleteSelection}
                        onChange={this.onChange}
                    />
        });
        return (
            <React.Fragment>
                <div style={{ marginBottom: '20px' }}>
                    <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#addQuestion"><i className="fa fa-plus-circle mr-5" aria-hidden="true"></i>Thêm câu hỏi khảo sát</button>
                    <div id="addQuestion" className="container collapse" style={{ width: '50%', borderLeft: '6px solid #4285F4', backgroundColor: 'lightgrey', borderRadius: '10px' }}>
                        <div className="row">
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                <div className="form-group">
                                    <label className="col-form-label">Nội dung câu hỏi:</label>
                                    <input type="text" className="form-control" name="contentQuestion" value={this.state.contentQuestion} onChange={this.onChangeContentQuestion}/>
                                </div>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <div className="form-group">
                                    <label className="col-form-label">Loại câu hỏi:</label>
                                    <select className="form-control" name="typeQuestion" value={this.state.typeQuestion} onChange={this.onChangeType}>
                                        <option value={1}>Trắc nghiệm</option>
                                        <option value={2}>Hộp kiểm</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {elmSelections}
                        <div className="input-group">
                            <span className="input-group-addon"><i className={typeQuestion === 1 ? "fa fa-circle-thin" : "fa fa-square-o"} aria-hidden="true"></i></span>
                            <button type="button" className="btn btn-default form-control" style={{ width: '20%' }} onClick={this.onAddSelection}>Thêm tùy chọn</button>
                        </div>
                        {/* <button type="button" className="btn btn-default"><i className="fa fa-trash-o" aria-hidden="true"></i></button> */}
                        <hr></hr>
                        <button className="btn btn-success" onClick={this.onAddQuestion}>Lưu lại</button>
                    </div>
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
        onAddSurveyQuestion: (surveyQuestion) => {
            dispatch(actions.actAddSurveyQuestion(surveyQuestion));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddSurveyQuestionsCollapse);
