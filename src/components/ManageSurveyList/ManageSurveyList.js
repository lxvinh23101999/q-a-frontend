import React, { Component } from 'react';
import { connect } from 'react-redux';     
import ManageSurveyItem from '../ManageSurveyItem/ManageSurveyItem';
class ManageSurveyList extends Component {
    render() {
        let { manageSurveys } = this.props;
        let elmSurveys = manageSurveys.map((survey, index) => {
            return <ManageSurveyItem key={survey.id} index={index + 1} survey={survey}></ManageSurveyItem>
        });
        return (
            <React.Fragment>
                <table className="table table-bordered tabel-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Chủ đề</th>
                            <th className="text-center">Mô tả</th>
                            <th className="text-center">Người tạo</th>
                            <th className="text-center">Trạng thái</th>
                            <th className="text-center">Ngày tạo</th>
                            <th className="text-center">Ngày đóng</th>
                            <th className="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmSurveys}
                    </tbody>
                </table>
                {/* {elmUsers.length === 0 ? <p style={{color: 'red'}}><i>Không tìm thấy kết quả phù hợp</i></p> : ""} */}
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        manageSurveys: state.manageSurveys
    }
};
export default connect(mapStateToProps, null)(ManageSurveyList);
