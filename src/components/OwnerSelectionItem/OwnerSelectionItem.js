import React, { Component } from 'react';
class OwnerSelectionItem extends Component {
    render() {
        let { selection, typeQuestion } = this.props;
        return (
            <React.Fragment>
                <div className="input-group" style={{ marginBottom: '15px' }}>
                        <span className="input-group-addon"><i className={typeQuestion === 1 ? "fa fa-circle-thin" : "fa fa-square-o"} aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="contentSelection" value={selection.contentSelection} readOnly />
                    </div>
            </React.Fragment>
        );
    }
}
export default OwnerSelectionItem;
