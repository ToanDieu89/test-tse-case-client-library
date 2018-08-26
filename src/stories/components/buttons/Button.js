import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { type, size, disable, label } = this.props;
    let classname = "";
    if (size === "large" && type === "primary" && disable === false) {
      classname = "large-primary-default";
    } else if (size === "large" && type === "primary" && disable === true) {
      classname = "large-primary-disable";
    } else if (size === "large" && type === "secondary" && disable === false) {
      classname = "large-secondary-default";
    } else if (size === "large" && type === "secondary" && disable === true) {
      classname = "large-secondary-disable";
    } else if (size === "large" && type === "danger" && disable === false) {
      classname = "large-danger-default";
    } else if (size === "large" && type === "danger" && disable === true) {
      classname = "large-danger-disable";
    } else if (size === "small" && type === "primary" && disable === false) {
      classname = "small-primary-default";
    } else if (size === "small" && type === "primary" && disable === true) {
      classname = "small-primary-disable";
    } else if (size === "small" && type === "secondary" && disable === false) {
      classname = "small-secondary-default";
    } else if (size === "small" && type === "secondary" && disable === true) {
      classname = "small-secondary-disable";
    } else if (size === "small" && type === "danger" && disable === false) {
      classname = "small-danger-default";
    } else if (size === "small" && type === "danger" && disable === true) {
      classname = "small-danger-disable";
    } else if (size === "tiny" && type === "primary" && disable === false) {
      classname = "tiny-primary-default";
    } else if (size === "tiny" && type === "primary" && disable === true) {
      this.setState({ classname: "tiny-primary-disable" });
      classname = "tiny-primary-disable";
    } else if (size === "tiny" && type === "secondary" && disable === false) {
      classname = "tiny-secondary-default";
    } else if (size === "tiny" && type === "secondary" && disable === true) {
      classname = "tiny-secondary-disable";
    } else if (size === "tiny" && type === "danger" && disable === false) {
      classname = "tiny-danger-default";
    } else if (size === "tiny" && type === "danger" && disable === true) {
      classname = "tiny-danger-disable";
    } else {
      classname = "small-primary-default";
    }
    return this.props.disable ? (
      <button className={classname}>{label}</button>
    ) : (
      <button {...this.props} className={classname}>
        {label}
      </button>
    );
  }
}

Button.defaultProps = {
  disable: false
};

Button.propTypes = {
  /** specify the size of button: large, small and tiny */
  size: PropTypes.string,
  /** specify the type of button: primary, secondary and danger */
  type: PropTypes.string,
  /** specify the lable of button */
  label: PropTypes.string.isRequired,
  /** specify the button will be in state of enable or disable: true, false */
  disable: PropTypes.bool
};

export default Button;
