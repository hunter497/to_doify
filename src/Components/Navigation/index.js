import React, { Component } from "react";
import Hamburger from "./Hamburger/index";
import { Link } from "react-router-dom";
import LoginModal from "../Modal/LoginModal/index";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      isLoginModalOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu = event => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };

  toggleLoginModal = event => {
    this.setState({
      isLoginModalOpen: !this.state.isLoginModalOpen
    });
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar is-light" aria-label="dropdown navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link className={"navbar-item"} to={"/"}>
                ToDo-ify
              </Link>
              <Hamburger
                menuOpen={this.state.isMenuOpen}
                toggle={this.toggleMenu}
              />
            </div>
            <div
              id="navMenu"
              className={
                "navbar-menu " + (this.state.isMenuOpen ? "is-active" : "")
              }
            >
              <div className="navbar-start">
                <Link className={"navbar-item"} to={"/"}>
                  Home
                </Link>
                <Link className={"navbar-item"} to={"/todo"}>
                  To Do
                </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <Link className={"navbar-item"} to={"/docs"}>
                    Docs
                  </Link>
                  <div className="navbar-dropdown">
                    <Link className={"navbar-item"} to={"/overview"}>
                      Overview
                    </Link>
                  </div>
                </div>
              </div>
              <div className="navbar-end">
                <a className="navbar-item" onClick={this.toggleLoginModal}>
                  Log in/Sign up
                </a>
              </div>
            </div>
          </div>
        </nav>
        <LoginModal
          toggleModal={this.toggleLoginModal}
          modalOpen={this.state.isLoginModalOpen}
        />
      </React.Fragment>
    );
  }
}

export default Header;
