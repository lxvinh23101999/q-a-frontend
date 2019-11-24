import React, { Component } from 'react';
class SelectionItem extends Component {
    render() {
        let { selection, typeQuestion, name, isResponded, isChecked, isLocked } = this.props;
        return (
            <React.Fragment>
                <input type={typeQuestion === 1 ? "radio" : "checkbox"} id={selection.id} name={name} value={selection.id} disabled={isResponded || isLocked ? true : false} checked={isChecked ? true : undefined}/> {selection.contentSelection}<br />
            </React.Fragment>
        );
    }
}
export default SelectionItem;
