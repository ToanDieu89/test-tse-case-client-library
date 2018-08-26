import React, { Component } from "react";
import PropTypes from "prop-types";

import UserPicWrapper from "./UserPicWrapper";
import ProfilePanel from "./ProfilePanel";

class UserPicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileClick: false
    };
  }

  handleProfileClick = () => {
    this.setState({
      profileClick: !this.state.profileClick
    });
  };

  render() {
    const { userpic, email, changepass, logout } = this.props;
    return (
      <div className="user-pic-profile">
        {this.state.profileClick ? (
          <div className="profile-panel">
            <ProfilePanel
              email={email}
              changepass={changepass}
              logout={logout}
            />
          </div>
        ) : null}
        <UserPicWrapper
          userPicture={userpic}
          handleonClick={this.handleProfileClick}
        />
      </div>
    );
  }
}

UserPicProfile.propTypes = {
  
};

export default UserPicProfile;
