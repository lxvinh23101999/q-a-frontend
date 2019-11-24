import React, { Component } from 'react';
import SessionItem from '../SessionItem/SessionItem';
import SearchSession from '../SearchSession/SearchSession';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import FilterSession from '../FilterSession/FilterSession';
class SessionFrame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexPagination: 1
        }
    }
    onChangeIndexPagination = (e) => {
        e.preventDefault();
        let aria_label = e.target.getAttribute("aria-label");
        let class_Name = e.target.parentElement.getAttribute("class");
        // console.log(e.target.getAttribute("aria-label"));
        let indexPagination = this.state.indexPagination;
        if (aria_label === "Previous" && class_Name !== "disabled") {
            this.setState({
                indexPagination: indexPagination - 1
            });
            // document.documentElement.scrollTop = 190;
        }
        else if (aria_label === "Next" && class_Name !== "disabled") {
            this.setState({
                indexPagination: indexPagination + 1
            });
            // document.documentElement.scrollTop = 190;
        }
        else if (aria_label !== "Next" && aria_label !== "Previous") {
            this.setState({
                indexPagination: parseInt(e.target.innerHTML)
            });
            // document.documentElement.scrollTop = 190;
        }
    }
    render() {
        let { sessions, searchSession, filterBy, isLoading } = this.props;
        if (isLoading) return <Loader></Loader>
        let keyWord = searchSession.keyWord.toLowerCase();
        let { indexPagination } = this.state;
        let filterSessions = [];
        sessions.forEach((session) => {
            let str = session.topic;
            if (str.toLowerCase().includes(keyWord)) {
                if (filterBy === "unlock") {
                    if ((new Date(session.closedAt).getTime() - Date.now() > 0 || !session.closedAt)) {
                        filterSessions.push(session);
                    }
                }
                else if (filterBy === "lock") {
                    if ((new Date(session.closedAt).getTime() - Date.now() < 0 && session.closedAt)) {
                        filterSessions.push(session);
                    }
                }
                else if (filterBy === "mysessions") {
                    if (session.owner === this.props.userInfo.id) {
                        filterSessions.push(session);
                    }
                }
                else filterSessions.push(session);
            }
        });
        let subSessions = [];
        for (let index = (indexPagination - 1) * 6 + 1; index <= (indexPagination - 1) * 6 + 6; index++) {
            if (filterSessions[index - 1]) {
                subSessions.push(filterSessions[index - 1]);
            }
        }
        let elmSessions = subSessions.map((session, index) => {
            return <SessionItem key={session.id} index={index + 1} session={session} />
        });
        if (Object.keys(elmSessions).length === 0) {
            elmSessions = <div style={{ textAlign: "center" }}><i>Không tìm thấy kết quả phù hợp</i></div>
        }
        let elmPaginations = [];
        let index = 1;
        for (let i = 1; i <= filterSessions.length; i = i + 6) {
            elmPaginations.push(<li key={index} className={indexPagination === index ? "active" : ""}><a href="/" onClick={this.onChangeIndexPagination}>{index}</a></li>);
            index++;
        }
        return (
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading"><h4><i className="fa fa-bars" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>{filterBy === "all" ? "Danh sách tất cả phiên hỏi đáp" : filterBy === "unlock" ? "Danh sách phiên hỏi đáp đang hoạt động": filterBy === "lock" ? "Danh sách phiên hỏi đáp đã đóng" : "Danh sách phiên hỏi đáp của tôi"}</h4></div>
                    <div className="panel-body bg-color">
                        <div className="row">
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                <FilterSession></FilterSession>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                <SearchSession></SearchSession>
                            </div>
                        </div>
                        {elmSessions}
                    </div>
                    <div className="panel-footer text-center">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className={indexPagination === 1 ? "disabled" : ""}>
                                    <a href="/" aria-label="Previous" onClick={this.onChangeIndexPagination}>
                                        &laquo;
                                    </a>
                                </li>
                                {elmPaginations}
                                <li className={indexPagination === elmPaginations.length || elmPaginations.length === 0 ? "disabled" : ""}>
                                    <a href="/" aria-label="Next" onClick={this.onChangeIndexPagination}>
                                        &raquo;
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sessions: state.sessions,
        searchSession: state.searchSession,
        filterBy: state.filterSession,
        isLoading: state.isLoading
    }
};
export default connect(mapStateToProps, null)(SessionFrame);
