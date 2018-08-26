import React, { Component } from "react";
import PropTypes from "prop-types";

class UserPicWrapper extends Component {
  render() {
    const { userPicture, handleonClick } = this.props;
    return (
      <div {...this.props} className="userpicwrapper" onClick={handleonClick}>
        <img src={userPicture} />
      </div>
    );
  }
}

UserPicWrapper.propTypes = {
  userPicture: PropTypes.string.isRequired,
  handleonClick: PropTypes.func.isRequired
}

export default UserPicWrapper;
