import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="right">
            <Link to="/auth/google">Login</Link>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li keys="3" style={{ margin: "0 10px" }}>
            Credits:{this.props.auth.credits}
          </li>,

          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? "/surveys" : "/"}>Logo</Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

//has access to entire state object
//pulls the part of state and pass it to Header as prop
const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
