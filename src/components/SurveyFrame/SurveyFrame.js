import React, { Component } from 'react';
import { connect } from 'react-redux';
import SurveyItem from '../SurveyItem/SurveyItem';
import Loader from '../Loader/Loader';
class SurveyFrame extends Component {
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
        let { surveys, isLoading } = this.props;
        if (isLoading) return <Loader></Loader>
        // let keyWord = searchSession.keyWord.toLowerCase();
        let keyWord = "";
        let { indexPagination } = this.state;
        let filterSurveys = [];
        surveys.forEach((survey) => {
            let str = survey.topic;
            if (str.toLowerCase().includes(keyWord)) {
                filterSurveys.push(survey);
            }
        });
        let subSurveys = [];
        for (let index = (indexPagination - 1) * 6 + 1; index <= (indexPagination - 1) * 6 + 6; index++) {
            if (filterSurveys[index - 1]) {
                subSurveys.push(filterSurveys[index - 1]);
            }
        }
        let elmSurveys = subSurveys.map((survey, index) => {
            return <SurveyItem key={survey.id} index={index + 1} survey={survey} />
        });
        if (Object.keys(elmSurveys).length === 0) {
            elmSurveys = <div style={{ textAlign: "center" }}><i>Không tìm thấy kết quả phù hợp</i></div>
        }
        let elmPaginations = [];
        let index = 1;
        for (let i = 1; i <= filterSurveys.length; i = i + 6) {
            elmPaginations.push(<li key={index} className={indexPagination === index ? "active" : ""}><a href="/" onClick={this.onChangeIndexPagination}>{index}</a></li>);
            index++;
        }
        return (
            <React.Fragment>
                <div className="panel panel-default">
                    <div className="panel-heading"><h4><i className="fa fa-bars" aria-hidden="true" style={{ marginRight: 10 + 'px' }}></i>Danh sách phiên khảo sát</h4></div>
                    <div className="panel-body bg-color">
                        <div className="row">
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                {/* <FilterSession></FilterSession> */}
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                {/* <SearchSession></SearchSession> */}
                            </div>
                        </div>
                        {elmSurveys}
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
        surveys: state.surveys,
        isLoading: state.isLoading
    }
};
export default connect(mapStateToProps, null)(SurveyFrame);
