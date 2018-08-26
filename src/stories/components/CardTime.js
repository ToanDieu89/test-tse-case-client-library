import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";

let CardTime = ({ createdAt }) => {
  return (
    <div className="card-time__time">
      <div className="card-time__time__hour">
        {format(createdAt, "HH:mm:ss")}
      </div>
      <div className="card-time__time__day">
        {format(createdAt, "dddd, MMM DD, YYYY")}
      </div>
    </div>
  );
};

CardTime.defaultProps = {};

CardTime.propTypes = {
    createdAt: PropTypes.string.isRequired
};

export default CardTime;
