import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.targetContents.title,
      desc: this.props.targetContents.desc
    };
  }

  inputHandler(name, { target }) {
    this.setState({ [name]: target.value });
  }

  render() {
    const { title, desc } = this.state;
    return (
      <div>
        <h2>Update</h2>
        <form
          action=""
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input name="title" type="text" value={title} onChange={this.inputHandler.bind(this, "title")} />
          </p>
          <p>
            <textarea
              name="desc"
              id=""
              value={desc}
              cols="25"
              rows="5"
              onChange={this.inputHandler.bind(this, "desc")}
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </div>
    );
  }
}
export default UpdateContent;
