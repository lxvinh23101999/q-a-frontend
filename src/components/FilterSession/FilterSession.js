import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
class FilterSession extends Component {
    onClick = (value) => {
        this.props.onFilterSession(value);
    }
    render() {
        return (
            <React.Fragment>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1" style={{fontSize: '18px'}}>
                        <li onClick={(e) => {e.preventDefault(); this.onClick("all")}}>
                            <a href="/" role="button" className={this.props.filterBy==="all" ? "sort-selected" : ""}>
                                <span className="fa fa-globe"> Tất cả phiên hỏi đáp</span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={(e) => {e.preventDefault(); this.onClick("unlock")}}>
                            <a href="/" role="button" className={this.props.filterBy==="unlock" ? "sort-selected" : ""}>
                                <span className="fa fa-unlock" aria-hidden="true"> Phiên hỏi đáp đang hoạt động</span>
                            </a>
                        </li>
                        <li onClick={(e) => {e.preventDefault(); this.onClick("lock")}}>
                            <a href="/" role="button" className={this.props.filterBy==="lock" ? "sort-selected" : ""}>
                                <span className="fa fa-lock" aria-hidden="true"> Phiên hỏi đáp đã đóng</span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={(e) => {e.preventDefault(); this.onClick("mysessions")}}>
                            <a href="/" role="button" className={this.props.filterBy==="mysessions" ? "sort-selected" : ""}>
                                <span className="fa fa-user" aria-hidden="true"> Phiên hỏi đáp của tôi</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filterBy: state.filterSession,
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterSession: (by) => {
            dispatch(actions.filterSession(by));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterSession);
