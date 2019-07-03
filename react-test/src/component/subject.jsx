import React, { Component } from "react";
class Subject extends Component {
  render() {
    const { title, sub } = this.props;
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage("read", 0);
            }.bind(this)}
          >
            {title}
          </a>
        </h1>
        <div>{sub}</div>
      </header>
    );
  }
}
export default Subject;
