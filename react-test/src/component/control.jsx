import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/"
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage("create");
            }.bind(this)}
          >
            Create
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage("update");
            }.bind(this)}
          >
            Update
          </a>
        </li>
        <li>
          <button
            onClick={e => {
              e.preventDefault();
              this.props.onDelete();
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  }
}
export default Control;
