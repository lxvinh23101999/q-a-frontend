import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions/index';
class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyWord: {
                name: "",
                userName: "",
                createdDate: "",
                role: "all"
            }
        }
    }
    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let keyWord = {
            ...this.state.keyWord,
            [name]: value
        }
        this.setState({
            keyWord: {
                ...this.state.keyWord,
                [name]: value
            }
        });
        this.props.onSearch(keyWord);
    }
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" className="form-control" name="name" value={this.state.keyWord.name} onChange={this.onChange} />
                    </td>
                    <td>
                        <input type="text" className="form-control" name="userName" value={this.state.keyWord.userName} onChange={this.onChange} />
                    </td>
                    <td>
                        <select className="form-control" name="role" value={this.state.keyWord.role} onChange={this.onChange}>
                            <option value="all">Tất cả</option>
                            <option value="admin">admin</option>
                            <option value="master">master</option>
                            <option value="student">student</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" className="form-control" name="createdDate" value={this.state.keyWord.createdDate} onChange={this.onChange} />
                    </td>
                    <td></td>
                </tr>
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch: _.debounce((keyWord) => {
            dispatch(actions.searchUser(keyWord));
        }, 500)
    }
}
export default connect(null, mapDispatchToProps)(SearchUser);
