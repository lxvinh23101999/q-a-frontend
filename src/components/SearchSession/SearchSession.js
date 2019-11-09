import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions/index';
class SearchSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: ""
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
        this.props.onSearch(value);
    }
    render() {
        return (
            <React.Fragment>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></span>
                    <input type="text" className="form-control" placeholder="Tìm kiếm..." aria-describedby="basic-addon1" name="keyWord" value={ this.state.keyWord } onChange={this.onChange} />
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // sessions: state.sessions
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch : _.debounce((keyWord) => {
            dispatch(actions.searchSession(keyWord));
        },500)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchSession);
