import React, { Component } from 'react';
import SelectionItem from '../SelectionItem/SelectionItem';
class SurveyQuestionItem extends Component {
    render() {
        let { surveyQuestion, index } = this.props;
        let selections = surveyQuestion.selections;
        let elmSelections = selections.map((selection, index) => {
            return <SelectionItem
                key={selection.id}
                selection={selection}
                typeQuestion={surveyQuestion.typeQuestion}
                name={surveyQuestion.id}
                isResponded={surveyQuestion.isResponded}
                isChecked={selection.isChecked}
                isLocked={this.props.isLocked}
            ></SelectionItem>
        });
        return (
            <React.Fragment>
                <div className="panel panel-default" id={index}>
                    <div className="panel-heading">Câu {index}: {surveyQuestion.contentQuestion}</div>
                    <div className="panel-body">
                        {elmSelections}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default SurveyQuestionItem;
