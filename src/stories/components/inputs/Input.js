import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
  render() {
    const { lable, type } = this.props;
    return (
      <div className="input-wrapper">
        <div className="input-wrapper__lable">{lable}</div>
        <input className="input-wrapper__field" type={type || "text"} />
      </div>
    );
  }
}

Input.defaultProps = {};

Input.propTypes = {
  /** lable of input field */
  lable: PropTypes.string,
  /** type of input field */
  type: PropTypes.string
};

export default Input;
