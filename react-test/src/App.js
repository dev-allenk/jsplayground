import React, { Component } from "react";
import "./App.css";
import Subject from "./component/subject";
import Nav from "./component/nav";
import ReadContent from "./component/read_content";
import CreateContent from "./component/create_content";
import UpdateContent from "./component/update_content";
import Control from './component/control'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      currentId: 0,
      subject: { title: "WEB", sub: 'world wide web' },
      welcome: { title: 'Welcome', desc: 'Hello! React!' },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "Javascript", desc: "Javascript is for interaction" }
      ]
    };
    this.getCurrentContents = this.getCurrentContents.bind(this)
  }
  showContent(mode, id) {
    this.setState({ mode: mode, currentId: id });
  }

  // setCurrentId = id => {
  //   this.setState({ currentId: id });
  // };
  setMode(mode) {
    this.setState({ mode: mode })
  }

  getCurrentContents = currentId => {
    if (currentId === 0) return this.state.welcome;
    return this.state.contents[currentId - 1];
  };

  getNextId() {
    return this.state.contents.length + 1
  }

  addContent(title, desc) {
    const id = this.getNextId();
    this.setState({ mode: 'read', currentId: id, contents: [...this.state.contents, { id, title, desc }] })
  }

  updateContent(title, desc) {
    const id = this.state.currentId;
    const contents = this.state.contents.map(el => {
      return el.id === id ? { id, title, desc } : el;
    })
    this.setState({ mode: 'read', contents });
  }

  deleteContent() {
    const id = this.state.currentId;
    const contents = this.state.contents.filter(el => {
      if (el.id !== id) return el;
    })
    this.setState({ mode: 'read', currentId: 0, contents });
  }

  getArticle(mode) {
    const map = {
      read: <ReadContent contents={this.getCurrentContents(this.state.currentId)} />,
      create: <CreateContent onSubmit={this.addContent.bind(this)}></CreateContent>,
      update: <UpdateContent targetContents={this.getCurrentContents(this.state.currentId)} onSubmit={this.updateContent.bind(this)} ></UpdateContent>
    }
    return map[mode];
  }

  render() {
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} onChangePage={this.showContent.bind(this)} />
        <Nav contents={this.state.contents} onChangePage={this.showContent.bind(this)} />
        <Control onChangePage={this.setMode.bind(this)} onDelete={this.deleteContent.bind(this)}></Control>
        {this.getArticle(this.state.mode)}
      </div>
    );
  }
}

export default App;
