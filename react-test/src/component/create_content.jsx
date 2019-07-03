import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <div>
        <h2>Create</h2>
        <form
          action=""
          onSubmit={function(e) {
            e.preventDefault();
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input name="title" type="text" placeholder="title" />
          </p>
          <p>
            <textarea name="desc" id="" cols="25" rows="5" placeholder="desc" />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </div>
    );
  }
}
export default CreateContent;
