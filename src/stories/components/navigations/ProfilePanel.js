import React, { Component } from "react";
import PropTypes from "prop-types";


class ProfilePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      colorChangePassword: "",
      colorLogout: ""
    };
  }

  handleHover = value => {
    if (value === "changepassword") {
      this.setState({
        active: value,
        colorChangePassword: "#f08262"
      });
    } else {
      this.setState({
        active: value,
        colorLogout: "#f08262"
      });
    }
  };

  handleOut = () => {
    this.setState({
      active: "",
      colorChangePassword: "",
      colorLogout: ""
    });
  };

  render() {
    const { email, changepass, logout } = this.props;
    return (
      <div className="profile">
        <div className="profile__email">
          <p>{email}</p>
        </div>
        <div className="profile__devider" />
        <div className="profile__stuff">
          <div
            className="profile__stuff__changepassword"
            onMouseLeave={() => this.handleOut()}
            onMouseOver={() => this.handleHover("changepassword")}
            onClick={changepass.handleChangePassword}
          >
            {this.state.active === "changepassword" ? (
              <img src={changepass.iconActive} />
            ) : (
              <img src={changepass.icon} />
            )}
            <p style={{ color: this.state.colorChangePassword }}>
              {changepass.text}
            </p>
          </div>
          <div
            className="profile__stuff__logout"
            onMouseLeave={() => this.handleOut()}
            onMouseOver={() => this.handleHover("logout")}
            onClick={logout.handleLogout}
          >
            {this.state.active === "logout" ? (
              <img src={logout.iconActive} />
            ) : (
              <img src={logout.icon} />
            )}
            <p style={{ color: this.state.colorLogout }}>{logout.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

ProfilePanel.propTypes = {
  email: PropTypes.string.isRequired,
  changepass: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconActive: PropTypes.string.isRequired,
    handleChangePassword: PropTypes.func.isRequired
  }).isRequired,
  logout: PropTypes.shape({
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconActive: PropTypes.string.isRequired,
    handleLogout: PropTypes.func.isRequired
  }).isRequired
};

export default ProfilePanel;
