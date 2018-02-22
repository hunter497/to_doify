import React, { Component } from "react";

class ToDo extends Component {
  displayDate = () => {
    var date = null;
    this.props.item.completed
      ? (date = "Completed on: " + this.props.item.dateFinished)
      : (date = this.props.item.dateCreated);
    return date;
  };
  render() {
    return (
      <div className="column is-one-third">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">{this.props.item.title}</p>
          </header>
          <div className="card-content">
            <div className="content">
              {this.props.item.desc}
              <br />
              <br />
              <time dateTime={this.displayDate()}>{this.displayDate()}</time>
            </div>
          </div>
          <footer className="card-footer">
            {!this.props.item.completed && (
              <a className="card-footer-item" onClick={this.props.complete}>
                Complete
              </a>
            )}
            <a className="card-footer-item" onClick={this.props.edit}>
              Edit
            </a>
            <a className="card-footer-item" onClick={this.props.delete}>
              Delete
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default ToDo;
