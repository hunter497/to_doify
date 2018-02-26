import React, { Component } from "react";

class NewModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  closeModal = () => {
    this.props.toggleModal();
  };

  handleUserChange = event => {
    this.setState({ username: event.target.value });
  };

  handlePWChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className={"modal " + (this.props.modalOpen ? "is-active" : "")}>
        <div className="modal-background" onClick={this.closeModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Log in</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.closeModal}
            />
          </header>
          <section className="modal-card-body">
            <div id="toDoForm">
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    value={this.state.username}
                    onChange={this.handleUserChange}
                    className="input"
                    type="text"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    value={this.state.password}
                    onChange={this.handlePWChange}
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => this.props.addNewItem()}
            >
              Log in
            </button>
            <button className="button" onClick={this.closeModal}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default NewModal;
