import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class HeaderLogo extends React.Component {
  render() {
    const { logo, path } = this.props;
    return (
      <div className="header__logo">
        <div className="logo-wrapper">
          <NavLink to={path || ""}>
            <img src={logo} />
          </NavLink>
        </div>
      </div>
    );
  }
}

HeaderLogo.defaultProps = {};

HeaderLogo.propTypes = {};

export default HeaderLogo;
