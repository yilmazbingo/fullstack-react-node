import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

//has access to entire state object
//pulls the part of state and pass it to Header as prop
const mapStateToProps = ({ auth }) => {
  return { a: auth };
};

export default connect(mapStateToProps)(Header);
