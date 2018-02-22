import React, { Component } from "react";

class HomeHero extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero is-primary is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-two-thirds is-left">
                  <p className="title">ToDo-ify</p>
                  <p className="subtitle">
                    Holistic approach to managing your life&#39;s goals and
                    actions!
                  </p>
                </div>
                <div className="column is-one-third is-right">
                  <div className="control">
                    <a
                      id="new-to-do-item"
                      className="button is-white is-outlined is-large "
                      onClick={this.toggleModal}
                    >
                      Log in or Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomeHero;
