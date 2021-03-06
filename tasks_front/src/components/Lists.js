import "./Lists.css";
import React from "react";
import List from "./List";
import { connect } from "react-redux";
import {
  tryGettingLists,
  tryAddingList,
  changeCurrentList,
} from "../redux/actions/listsActions";

class Lists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newListTitle: "",
    };
  }

  componentDidMount() {}

  handleChange(e) {
    this.setState({ ...this.state, newListTitle: e.target.value });
  }

  async tryAddingList(e) {
    if (e.keyCode == 13 && this.state.newListTitle.length) {
      await this.props.tryAddingList(this.props.token, this.state.newListTitle);
      this.setState({ newList: "" });
      this.props.tryGettingLists(this.props.token);
    }
  }

  render() {
    return (
      <div className="lists">
        <div className="login_header">My lists</div>
        <div className="lists_tile">
          {this.props.lists.map((list) => (
            <div
              key={list.id}
              onClick={() =>
                this.props.changeCurrentList(list, this.props.token)
              }
            >
              <List list={list} />
            </div>
          ))}
          <input
            className="lists_add"
            type="text"
            placeholder="Create new task list..."
            value={this.state.newList}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.tryAddingList.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists.lists,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, {
  tryGettingLists,
  tryAddingList,
  changeCurrentList,
})(Lists);
