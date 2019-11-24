import React, { Component } from 'react';
import { connect } from 'react-redux';
class AddSelectionInput extends Component {
    onDeleteSelection = () => {
        this.props.onDeleteSelection(this.props.index);
    }
    onChange = (e) => {
        let target = e.target;
        let value = target.value;
        this.props.onChange({index: this.props.index, contentSelection: value});
    }
    render() {
        let { typeQuestion } = this.props;
        return (
            <React.Fragment>
                <div className="input-group" style={{ marginBottom: '15px' }}>
                    <span className="input-group-addon"><i className={typeQuestion === 1 ? "fa fa-circle-thin" : "fa fa-square-o"} aria-hidden="true"></i></span>
                    <input type="text" className="form-control" placeholder={"Tùy chọn " + this.props.index} name="contentSelection" value={this.props.contentSelection} onChange={this.onChange}/>
                    <div className="input-group-btn">
                        <button type="button" className="btn btn-danger" onClick={this.onDeleteSelection}><i className="fa fa-times" aria-hidden="true"></i></button>
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddSelectionInput);
