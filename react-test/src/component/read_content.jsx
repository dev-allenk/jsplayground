import React, { Component } from "react";

class ReadContent extends Component {
  render() {
    const contents = this.props.contents;
    return (
      <div>
        <h2>{contents.title}</h2>
        <div>{contents.desc}</div>
      </div>
    );
  }
}
export default ReadContent;
