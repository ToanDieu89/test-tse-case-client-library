import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import HeaderLogo from "./HeaderLogo";
import UserPicWrapper from "./UserPicWrapper";
import ProfilePanel from "./ProfilePanel";

class NavigationSideBarWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: -1,
      profileClick: false
    };
  }
  handleActive = index => {
    this.setState({
      active: index
    });
  };

  handleProfileClick = () => {
    this.setState({
      profileClick: !this.state.profileClick
    });
  };

  render() {
    const { datas, userstuff, logostuff, withLogo } = this.props;
    return (
      <div className="navigation">
        {withLogo ? (
          <div className="navigation__logo">
            <HeaderLogo logo={logostuff.pic} path={logostuff.path} />
          </div>
        ) : null}

        <div className="navigation__devider" />
        <div className="navigation__sidebar">
          <ul>
            {datas.map((data, index) => (
              <NavLink
                onClick={() => this.handleActive(index)}
                key={index}
                to={data.url || ""}
                {...data}
              >
                <li>
                  <div className="ic-container">
                    {this.state.active === index ? (
                      <img src={data.iconActive} />
                    ) : (
                      <img src={data.icon} />
                    )}
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>

          <div className="user-pic">
            {this.state.profileClick ? (
              <div className="sidebar__profile-panel">
                <ProfilePanel
                  email={userstuff.email}
                  changepass={userstuff.changepass}
                  logout={userstuff.logout}
                />
              </div>
            ) : null}
            <UserPicWrapper
              userPicture={userstuff.pic}
              handleonClick={this.handleProfileClick}
              {...this.props}
            />
          </div>
        </div>
      </div>
    );
  }
}

NavigationSideBarWrapper.defaultProps = {
  withLogo: false
}

NavigationSideBarWrapper.propTypes = {
  /** An array of icons' stuff it will display, it included:
   * (*) icon: default icon when loaded
   * (*) iconActive: icon returned when clicked
   * (*) url: path will get redirected when click
   *  */
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      iconActive: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  /** An object contained user's stuff included:
   * (*) pic: user profifle picture
   * (*) email: user email
   * (*) changepass: first object contained info when user's picture is clicked included:
   * (**) text: lable will display to user
   * (**) icon: first default icon displayed when user's picture clicked
   * (**) iconActive: first icon displayed when mouse pointed to the lable and icon
   * (**) handleChangePassword: a call back function executed when its lable click
   * (*) logout: second object contained info when user's picture is clicked included:
   * (**) text: lable will display to user
   * (**) icon: first default icon displayed when user's picture clicked
   * (**) iconActive: first icon displayed when mouse pointed to the lable and icon
   * (**) handleLogout: a call back function when its lable clicked
   *  */
  userstuff: PropTypes.shape({
    pic: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    changepass: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
      iconActive: PropTypes.string,
      handleChangePassword: PropTypes.func
    }),
    logout: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
      iconActive: PropTypes.string,
      handleLogout: PropTypes.func
    })
  }).isRequired,
  /** an object contained:
   * (*) pic: the logo of website
   * (*) path: url will get redirected when logo got click event
   */
  logostuff: PropTypes.shape({
    pic: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  }).isRequired,
  /** come with or without logo */
  withLogo: PropTypes.bool
};

export default NavigationSideBarWrapper;
