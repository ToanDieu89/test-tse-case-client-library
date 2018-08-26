import React from "react";
import PropTypes from "prop-types";

class Loading extends React.Component {
  render() {
    return this.props.type === "default" ? (
      <div className="spinner__dots">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    ) : (
      <div className="loader-spinner" />
    );
  }
}

Loading.defaultProps = {};

Loading.propTypes = {
  /** type of loading. Available: default, circle*/
  type: PropTypes.string.isRequired
};

export default Loading;
