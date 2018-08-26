import React from "react";
import PropTypes from "prop-types";

class Row extends React.Component {
  render() {
    const { time, lable, description, action } = this.props;
    return (
      <div className="row-wrapper">
        <div className="row-wrapper__time">
          <p>{time}</p>
        </div>
        <div className="row-wrapper__content">
          <p className="row-wrapper__content__lable">{lable}</p>
          <p className="row-wrapper__content__description">{description}</p>
        </div>
        {action[0] && action[1] ? (
          <div className="row-wrapper__action">
            <div className="row-wrapper__action--wrapper">
              <div className="row-wrapper__action_first" {...action[0]}>
                <p>{action[0].lable}</p>
              </div>
              <div className="row-wrapper__action_devider" />
              <div className="row-wrapper__action__second" {...action[1]}>
                <p>{action[1].lable}</p>
              </div>
            </div>
          </div>
        ) : action[0] ? (
          <div className="row-wrapper__action">
            <div className="row-wrapper__action__second" {...action[0]}>
              <p>{action[0].lable}</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

Row.defaultProps = {};

Row.propTypes = {
    time: PropTypes.string.isRequired,
    lable: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.arrayOf(PropTypes.shape({
        lable: PropTypes.string.isRequired
    })).isRequired
};

export default Row;
