import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";
import successIcon from "../../../src/assets/icons/ic-circle-success.svg";

let RowSuccessIcon = ({ createdAt, detail, index }) => {
  return (
    <tr key={index} className="table__row">
      <td>
        <img className="table-row__icon" src={successIcon} />
        <div className="memo">
          <div className={`memo__content u-margin-bottom--6`}>{detail}</div>
          <div className="u-text-transform--uppercase">
            {format(createdAt, "MMM DD, YYYY, HH:mm:ss")}
          </div>
        </div>
      </td>
      <td className="u-text-align--right" />
    </tr>
  );
};

RowSuccessIcon.defaultProps = {
 
};

RowSuccessIcon.propTypes = {
  index: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired
};

export default RowSuccessIcon;
