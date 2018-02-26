import React, { Component } from "react";
import ToDoList from "../List/index";

class ToDoSection extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">{this.props.title}</p>
                  <p className="subtitle">{this.props.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container">
            <ToDoList
              toDoList={this.props.toDoList}
              delete={this.props.delete}
              edit={this.props.edit}
              complete={this.props.complete}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoSection;
