import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";
import timeIcon from "../../../src/assets/icons/ic-circle-time.svg";

let CardTimeIcon = ({ createdAt }) => {
  return (
    <div className="card-time u-margin-bottom--20">
      <img className="card-time__icon" src={timeIcon} />
      <div className="card-time__time">
        <div className="card-time__time__hour">
          {format(createdAt, "HH:mm:ss")}
        </div>
        <div className="card-time__time__day">
          {format(createdAt, "dddd, MMM DD, YYYY")}
        </div>
      </div>
    </div>
  );
};

CardTimeIcon.defaultProps = {};

CardTimeIcon.propTypes = {
  createdAt: PropTypes.string.isRequired
};

export default CardTimeIcon;
