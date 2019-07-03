import React, { Component } from "react";

class Nav extends Component {
  render() {
    const lists = [];
    const contents = this.props.contents;
    for (let el of contents) {
      lists.push(
        <li key={el.id}>
          <a
            href="/"
            onClick={function(id, e) {
              e.preventDefault();
              this.props.onChangePage("read", id);
            }.bind(this, el.id)}
          >
            {el.title}
          </a>
        </li>
      );
    }
    return <ul>{lists}</ul>;
  }
}
export default Nav;
