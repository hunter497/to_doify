import React, { Component } from "react";

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      topic: "",
      desc: "",
      dateCreated: "",
      completed: false,
      dateFinished: null
    };
  }

  clearFields = () => {
    this.props.toggleModal();
    this.setState({
      id: "",
      title: "",
      topic: "",
      desc: "",
      dateCreated: ""
    });
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleTopicChange = event => {
    this.setState({ topic: event.target.value });
  };

  handleDescChange = event => {
    this.setState({ desc: event.target.value });
  };

  render() {
    return (
      <div className={"modal " + (this.props.modalOpen ? "is-active" : "")}>
        <div className="modal-background" onClick={this.clearFields} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Edit To Do Item</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.clearFields}
            />
          </header>
          <section className="modal-card-body">
            <div id="toDoForm">
              <div className="field">
                <label className="label">Item Name</label>
                <div className="control">
                  <input
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    className="input"
                    type="text"
                    placeholder="New Item"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Topic</label>
                <div className="control">
                  <input
                    value={this.state.topic}
                    onChange={this.handleTopicChange}
                    className="input"
                    type="text"
                    placeholder="Topic"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    value={this.state.desc}
                    onChange={this.handleDescChange}
                    className="textarea"
                    placeholder="Summary of the item"
                  />
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => this.props.editItem(this.state)}
            >
              Save changes
            </button>
            <button className="button" onClick={this.clearFields}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default EditModal;
